import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Observable, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ArticleService {
	private entryList: Entry<any>[] = [];
	private articles: Article[] = [];
	private currentArticle: Article = new Article();




	constructor(private contentfulService: ContentfulService) { }

	getArticles(): Observable<Article[]> {
		this.contentfulService.getArticles()
			.then(response => {
				this.entryList = response;
				for (let entry of this.entryList) {
					this.articles.push(this.createArticle(entry));
				}
			});
		return of(this.articles);
	}

	getArticle(id: string): Observable<Article> {
		const articleObservable = new Observable<Article>(observer => {
			if (this.articles.length > 0) {
				const results = this.articles.filter(item => item.id === id);

				if (results.length > 0) {
					this.currentArticle = results[0];
				} else {
					console.warn("Cannot find article with id -" + id);
				}
				observer.next(this.currentArticle);
			} else {
				//call API
				this.contentfulService.getArticle(id)
					.then(response => {
						this.currentArticle = this.createArticle(response);
						observer.next(this.currentArticle);
					});
			}
		})
		return articleObservable;
	}

	createArticle(entry: Entry<any>): Article {
		let article = new Article();
		article.id = entry.sys.id;
		article.title = entry.fields.postTitle;
		article.description = entry.fields.description;
		article.heroImage = entry.fields.heroImage.fields;
		article.date = entry.fields.date;
		article.content = this.retrieveContent(entry.fields.post);
		return article;
	}

	retrieveContent(content: string): string {
		return content.replace(/(\r\n|\n|\r)/gm, '<br />');
	}
}

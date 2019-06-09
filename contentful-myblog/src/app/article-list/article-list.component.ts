import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
	selector: 'app-article-list',
	templateUrl: './article-list.component.html',
	styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
	articles: Article[] = [];

	constructor(private articleSvc: ArticleService) { }

	ngOnInit() {
		this.articleSvc.getArticles().subscribe(articles => {
			this.articles = articles;
		});
	}

}

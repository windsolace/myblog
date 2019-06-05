import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
	selector: 'app-article-list',
	templateUrl: './article-list.component.html',
	styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
	private articles: Entry<any>[] = [];

	constructor(private contentfulService: ContentfulService) { }

	ngOnInit() {
		this.contentfulService.getArticles()
		.then(articles => this.articles = articles)
	}

}

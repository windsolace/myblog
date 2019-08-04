import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { LoaderComponent } from '../loader/loader.component';
import { animate, transition, trigger, state, style } from '@angular/animations';

@Component({
	selector: 'app-article-list',
	templateUrl: './article-list.component.html',
	styleUrls: ['./article-list.component.less'],
	animations: [
		// animation triggers go here
		trigger('loadTrigger', [
			state('loading', style({
				opacity: 0,
			})),
			state('loaded', style({
				opacity: 1,
			})),
			transition(':enter', [
				animate("0.5s ease-in")
			]),
			transition('loading <=> loaded', [
				animate("0.5s ease-in")
			])
		])
	]
})
export class ArticleListComponent implements OnInit {
	articles: Article[] = [];
	loading: boolean = true;

	constructor(private articleSvc: ArticleService, private loader: LoaderComponent) { }

	ngOnInit() {
		this.articleSvc.getArticles().subscribe(articles => {
			this.articles = articles; console.log(articles);
			this.loading = false;
		});
	}

	toggle() {
		this.loading = !this.loading;
	}

}

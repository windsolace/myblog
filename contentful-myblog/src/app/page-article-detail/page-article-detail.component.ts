import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
	selector: 'app-page-article-detail',
	templateUrl: './page-article-detail.component.html',
	styleUrls: ['./page-article-detail.component.less']
})
export class PageArticleDetailComponent implements OnInit {
	private article: Article;
	private articleId: string = "";

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private articleSvc: ArticleService
	) { }

	ngOnInit() {
		this.articleId = this.route.snapshot.paramMap.get('id');
		this.articleSvc.getArticle(this.articleId).subscribe(article => {
			this.article = article;
		});
		
	}

	backToParent() {
		this.router.navigate(['/articles']);
	}

}

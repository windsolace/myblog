import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { BannerService } from '../banner.service';

@Component({
	selector: 'app-page-article-detail',
	templateUrl: './page-article-detail.component.html',
	styleUrls: ['./page-article-detail.component.less']
})
export class PageArticleDetailComponent implements OnInit {
	article: Article;
	articleId: string = "";
	loading: boolean = true;
	bannerTextArr: string[] = [
		"(^０^)ノ",
	];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private articleSvc: ArticleService,
		private bannerSvc:BannerService
	) { this.bannerSvc.setText(this.bannerTextArr); }

	ngOnInit() {
		this.bannerSvc.setText(this.bannerTextArr);
		this.articleId = this.route.snapshot.paramMap.get('id');
		this.articleSvc.getArticle(this.articleId).subscribe(article => {
			this.article = article;
			this.bannerTextArr.push(this.article.title);
			this.bannerSvc.setText(this.bannerTextArr);
			this.loading = false;
		});
		
	}

	backToParent() {
		this.router.navigate(['/']);
	}

}

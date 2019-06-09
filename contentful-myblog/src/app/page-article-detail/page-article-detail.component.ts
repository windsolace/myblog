import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
	selector: 'app-page-article-detail',
	templateUrl: './page-article-detail.component.html',
	styleUrls: ['./page-article-detail.component.less']
})
export class PageArticleDetailComponent implements OnInit {
	private article: any;
	private articleId: any = 0;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.articleId = this.route.snapshot.paramMap.get('id');
	}

	backToParent() {
		this.router.navigate(['/articles']);
	}

}

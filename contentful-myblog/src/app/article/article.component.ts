import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	private postTitleVal = '';
	private contentBody = '';
	private dateVal = '';

	constructor() { }

	@Input()
	set title(title: string) {
		this.postTitleVal = title.trim();
	}
	
	get title(): string { return this.postTitleVal }


	@Input()
	set content(content: string) {
		this.contentBody = content.trim();
	}

	get content(): string { return this.contentBody }

	@Input()
	set date(date : string) {
		this.dateVal = date;
	}

	get date(): string { return this.dateVal }

	ngOnInit() {

	}

}

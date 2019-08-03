import { Component, OnInit, Input } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import lazyLoadInit  from '../lazyload';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
	private _postTitle = '';
	private _description = '';
	private _content = '';
	private _date = '';
	private _image ='https://via.placeholder.com/3980';

	constructor(private markdownSvc: MarkdownService) { }

	@Input()
	set title(title: string) {
		this._postTitle = title.trim();
	}
	get title(): string { return this._postTitle }

	@Input()
	set description(description: string) {
		this._description = description.trim();
	}
	get description(): string { return this._description }

	@Input()
	set content(content: string) {
		console.log("before: " + content);
		// this._content = this.markdownSvc.compile(content.trim());
		this._content=content.replace(/<br \/>/g, '\n');
		console.log("after trim : "   + this._content);
	}
	get content(): string { return this._content }

	@Input()
	set date(date : string) {
		this._date = date;
	}
	get date(): string { return this._date }

	@Input()
	set image(image : string) {
		this._image = image;
	}
	get image(): string { return this._image }

	ngOnInit() {
		lazyLoadInit();
	}

}

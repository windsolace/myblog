import { Component, OnInit, Input } from '@angular/core';
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

	constructor() { }

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
		this._content = content.trim();
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

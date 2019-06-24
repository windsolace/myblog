import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
	private _title ='';
	private _content = '';
	hidden:boolean = true;

	constructor() { }

	@Input()
	set title(title: string) {
		this._title = title.trim();
	}
	get title(): string { return this._title }

	@Input()
	set content(content: string) {
		this._content = content.trim();
	}
	get content(): string { return this._content }

	ngOnInit() {
	}

	close() {
		this.hidden = true;
	}
	
	open() {
		this.hidden = false;
	}

}

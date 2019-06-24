import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent implements OnInit {
	private _content = '';
	hidden:boolean = true;
	top = "0px";
	left ="0px";

	constructor() { }

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
	
	openAtPos(cont:string, x:number, y:number) {
		this._content=cont;
		this.left = x + "px";
		this.top = y + "px";
		this.hidden = false;
	}

}

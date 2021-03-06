import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
	selector: 'app-page-home',
	templateUrl: './page-home.component.html',
	styleUrls: ['./page-home.component.less']
})
export class PageHomeComponent implements OnInit {
	bannerTextArr: string[] = [
		"(つ✧ω✧)つ",
		"Welcome to my profile!"
	];

	constructor(private bannerSvc:BannerService) { 
		this.bannerSvc.setText(this.bannerTextArr);
	}

	ngOnInit() {
	}

}

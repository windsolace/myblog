import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
	selector: 'app-page-about',
	templateUrl: './page-about.component.html',
	styleUrls: ['./page-about.component.less']
})
export class PageAboutComponent implements OnInit {
	bannerTextArr: string[] = [
		"Singapore.",
		"AEM Developer.",
		"Web Consultant."
	];

	constructor(private bannerSvc:BannerService) { 
		this.bannerSvc.setText(this.bannerTextArr);
	}
	
	ngOnInit() {
		this.bannerSvc.setText(this.bannerTextArr);
	}

}

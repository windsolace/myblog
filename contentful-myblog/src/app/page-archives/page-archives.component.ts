import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
	selector: 'app-page-archives',
	templateUrl: './page-archives.component.html',
	styleUrls: ['./page-archives.component.css']
})
export class PageArchivesComponent implements OnInit {
	bannerTextArr: string[] = [
		". . .",
		"Tech",
		"Experiments",
		"AEM",
		"Analytics",
		". . ."
	];

	constructor(private bannerSvc:BannerService) { 
		this.bannerSvc.setText(this.bannerTextArr);
	}

	ngOnInit() {
	}

}

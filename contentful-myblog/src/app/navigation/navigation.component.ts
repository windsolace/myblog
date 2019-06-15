import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from '../banner.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
	maxTop = 32;
	topPos = this.maxTop;
	fixedNaviActive = false;

	constructor(private router:Router,
				private bannerSvc:BannerService) { }

	@HostListener("window:scroll", ['$event.target.scrollingElement'])
	onWindowScroll(event) {
		// console.log(event.scrollTop);
		let num = event.scrollTop;
		if(num > 50) {
			this.topPos = 0;
			this.fixedNaviActive = true;
		} else {
			this.topPos = this.maxTop;
			this.fixedNaviActive = false;
		}
		
	}

	ngOnInit() {
	}

	navigate = function (location){
		this.router.navigateByUrl(location);
		this.bannerSvc.stop();
	}

}

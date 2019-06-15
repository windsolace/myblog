import { Component, OnInit, Input } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
	selector: 'app-herobanner',
	templateUrl: './herobanner.component.html',
	styleUrls: ['./herobanner.component.less']
})
export class HerobannerComponent implements OnInit {
	dataText:string[] = [];

	constructor(private bannerSvc:BannerService) { 
		let svcTextArr = this.bannerSvc.getText();
		if(svcTextArr && svcTextArr.length > 0){
			this.dataText = svcTextArr;
		}
		this.bannerSvc.start();
	}

	ngOnInit() {
		this.startTextAnimation(0);
	}

	// type one text in the typwriter
	// keeps calling itself until the text is finished
	typeWriter = function(text, i, fnCallback) {
		// chekc if text isn't finished yet
		if (i < (text.length)) {
			// add next character to h1
			document.querySelector(".herobanner__content").innerHTML = text.substring(0, i + 1) + '<span class="herobanner__caret"aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(()=> {
				this.typeWriter(text, i + 1, fnCallback)
			}, 100);
		}
		// text finished, call callback if there is a callback function
		else if (typeof fnCallback == 'function') {
			// call callback after timeout
			setTimeout(fnCallback, 700);
		}
	}
	// start a typewriter animation for a text in the dataText array
	startTextAnimation = function(i) {
		if (typeof this.dataText[i] == 'undefined' && this.bannerSvc.isRunning()) {
			setTimeout(()=> {
				if(this.bannerSvc.isRunning()) this.startTextAnimation(0);
			}, 20000);
		} 
		// check if dataText[i] exists
		if (i < this.dataText.length && this.bannerSvc.isRunning()) {
			// text exists! start typewriter animation
			this.typeWriter(this.dataText[i], 0, ()=> {
				// after callback (and whole text has been animated), start next text
				//check that only the current svc's text is being typed
				var svctxt = this.bannerSvc.getText()[i];
				var curtxt = this.dataText[i];
				// console.log(svctxt + " | " + curtxt);
				if(svctxt && svctxt === curtxt) {
					this.startTextAnimation(i + 1);
				}
			});
		} else return;
	}
	//credit: https://codepen.io/danielgroen/pen/VeRPOq

}

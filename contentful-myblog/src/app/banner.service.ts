import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BannerService {
	bannerText:string[] = ["Amsterdam.", "Full Service.", "Webdevelopment.", "Wij zijn Occhio!"];
	run:boolean = true;

	constructor() { }

	setText = (arr:string[])=>{
		this.bannerText = arr;
	}
	getText = ()=>{
		return this.bannerText;
	}
	isRunning = () => {
		return this.run;
	}
	start = ()=> {
		this.run = true;
	}
	stop = ()=>{
		this.bannerText=[];
		this.run = false;
	}
}

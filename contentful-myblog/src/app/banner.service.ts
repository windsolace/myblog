import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BannerService {
	bannerText:string[] = ["Amsterdam.", "Full Service.", "Webdevelopment.", "Wij zijn Occhio!"];

	constructor() { }

	setText = (arr:string[])=>{
		this.bannerText = arr;
	}
	getText = ()=>{
		return this.bannerText;
	}
}

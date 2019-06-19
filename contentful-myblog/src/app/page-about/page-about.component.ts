import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
	selector: 'app-page-about',
	templateUrl: './page-about.component.html',
	styleUrls: ['./page-about.component.less']
})
export class PageAboutComponent implements OnInit {
	bannerTextArr: string[] = [
		"(^０^)ノ",
		"I am an AEM Developer.",
		"I am a Web Consultant.",
		"I am here to stay."
	];

	projects: any = [
		{
			name:"Project Blog",
			features: [
				"Angular",
				"SVG-Font Mapping",
				"Continuous Deployment",
				"Headless CMS"
			],
			content: "Pet project that uses a Headless CMS and Angular as presentation layer. Leverage on Netlify as CD to seamlessly deploy code updates whenever there is merge into master branch. Explored mapping of svg icons onto font to reduce load times. "
		},
		{
			name:"Web Scraper",
			features: [
				"Python",
				"Scrapy"
			],
			content: "Simple web scraper based on Python and Scrapy library which scrapes a single site to look for elements. First attempt at setting up a project and creating something with Python 3."
		},
		{
			name:"My Tourist",
			features: [
				"Ionic Framework",
				"Hybrid App"
			],
			content: "Pet project based on Ionic Framework which aims to let visiting tourists Grab-A-Tourguide. A refresh of skills in Typescript and LESS after hiatus from work project based on Ionic."
		},
		{
			name:"JSensei - Telegram Bot",
			features: [
				"NodeJS",
				"Google Translate API",
				"Telegram Bot API",
				"AWS S3"
			],
			content: "Pet project to provide 2 main services via a chatbot on Telegram - Basic Translation & Serving up flashcards of key Japanese grammar hosted on S3. Shut down after running out of credits due to too many translation requests. First attempt at creating something with NodeJS."
		},
		{
			name:"My JP App",
			features: [
				"AWS Elastic Beanstalk",
				"JUnit Tests",
				"Java Spring REST API",
				"Android"
			],
			content:"Ambitious pet project that existed as both an Android App and a static AngularJS website that aims to do Japanese verb conjugations on the fly. Java Spring REST API hosted on AWS Elastic Beanstalk took input provided JSON responses to both Android App and website. List of special verb conjugation rules are configured in an excel sheet which is then exported into a PostGres database via invoking an API. A series of JUnit tests is set up to ensure that verb conjugation logic is correct. Android App was published on Google Play. Service was eventually shutdown as maintenance and infrastructure costs exceeded benefit."
		}
	]
	

	constructor(private bannerSvc:BannerService) { 
		this.bannerSvc.setText(this.bannerTextArr);
	}
	
	ngOnInit() {
		this.bannerSvc.setText(this.bannerTextArr);
	}

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';

// define the available routes
const routes: Routes = [
	{ path: '', component: PageHomeComponent },
	{ path: 'about', component: PageAboutComponent },
	{ path: 'articles', component: ArticleListComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ArticleListComponent,
		ArticleComponent,
		PageHomeComponent,
		PageAboutComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			routes,
			{ enableTracing: true }
		),
		NgbModule
	],
	providers: [
		ContentfulService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageArchivesComponent } from './page-archives/page-archives.component';
import { PageArticleDetailComponent } from './page-article-detail/page-article-detail.component';
import { LoaderComponent } from './loader/loader.component';
import { HerobannerComponent } from './herobanner/herobanner.component';
import { BannerService } from './banner.service';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { TooltipComponent } from './tooltip/tooltip.component';

// define the available routes
const routes: Routes = [
	{ path: '', component: PageHomeComponent },
	{ path: 'about', component: PageAboutComponent },
	{ path: 'articles/:id', component: PageArticleDetailComponent },
	{ path: 'articles', component: PageArchivesComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ArticleListComponent,
		ArticleComponent,
		PageHomeComponent,
		PageAboutComponent,
		NavigationComponent,
		PageArchivesComponent,
		PageArticleDetailComponent,
		LoaderComponent,
		HerobannerComponent,
		FooterComponent,
		ModalComponent,
		TooltipComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(
			routes,
			{ enableTracing: true }
		)
	],
	providers: [
		ContentfulService,
		LoaderComponent,
		BannerService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

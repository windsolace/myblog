import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';

// define the available routes
const routes: Routes = [
	{ path: '', redirectTo: '/articles', pathMatch: 'full' },
	{ path: 'articles', component: ArticleListComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ArticleListComponent,
		ArticleComponent
	],
	imports: [
		BrowserModule
	],
	providers: [
		ContentfulService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

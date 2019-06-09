import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from './../environments/environment';

const CONFIG = {
	space: environment.contentful.space,
	accessToken: environment.contentful.accessToken,

	contentTypeIds: {
		blogPost: '2PqfXUJwE8qSYKuM0U6w8M'
	}
}

@Injectable()
export class ContentfulService {

	private cdaClient = createClient({
		space: CONFIG.space,
		accessToken: CONFIG.accessToken
	});

	constructor() { }

	getArticles(query?: object): Promise<Entry<any>[]> {
		return this.cdaClient.getEntries(Object.assign({
			//content_type: CONFIG.contentTypeIds.blogPost
		}, query))
			.then(res => res.items);
	}

	getArticle(id:string, query?:object): Promise<Entry<any>> {
		return this.cdaClient.getEntry(id,query)
			.then(res => res);
	}

}

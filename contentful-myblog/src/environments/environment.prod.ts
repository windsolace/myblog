export const { CONTENT_SPACE, CONTENT_ACCESS_TOKEN } = process.env;
export const environment = {
	production: true,
	contentful: {
		space: CONTENT_SPACE,
		accessToken: CONTENT_ACCESS_TOKEN
	}
};

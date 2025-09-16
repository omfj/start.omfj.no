export const searchEngines = [
	{
		id: 'duckduckgo',
		title: 'DuckDuckGo',
		searchUrl: 'https://duckduckgo.com/?q='
	},
	{
		id: 'google',
		title: 'Google',
		searchUrl: 'https://google.com/search?q='
	},
	{
		id: 'bing',
		title: 'Bing',
		searchUrl: 'https://bing.com/search?q='
	}
] as const;

export type SearchEngine = (typeof searchEngines)[number]['id'];

export const isValidSearchEngine = (engine: string): engine is SearchEngine => {
	return searchEngines.some((e) => e.id === engine);
};

export const shortcuts = [
	{
		title: 'Fastmail',
		url: 'https://fastmail.com'
	},
	{
		title: 'YouTube',
		url: 'https://youtube.com'
	},
	{
		title: 'reddit',
		url: 'https://reddit.com'
	},
	{
		title: 'GitHub',
		url: 'https://github.com'
	},
	{
		title: 'Hacker News',
		url: 'https://news.ycombinator.com'
	},
	{
		title: 'NRK',
		url: 'https://nrk.no'
	}
] as const;

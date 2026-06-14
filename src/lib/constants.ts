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
		title: 'Proton Mail',
		url: 'https://mail.proton.me/u/3/inbox',
		key: '1'
	},
	{
		title: 'YouTube',
		url: 'https://youtube.com',
		key: '2'
	},
	{
		title: 'reddit',
		url: 'https://reddit.com',
		key: '3'
	},
	{
		title: 'GitHub',
		url: 'https://github.com',
		key: '4'
	},
	{
		title: 'Hacker News',
		url: 'https://news.ycombinator.com',
		key: '5'
	},
	{
		title: 'NRK',
		url: 'https://nrk.no',
		key: '6'
	},
	{
		title: 'The Economist',
		url: 'https://economist.com',
		key: '7'
	},
	{
		title: 'VG',
		url: 'https://vg.no',
		key: '8'
	},
	{
		title: 'FIFA Fantasy',
		url: 'https://play.fifa.com/fantasy/team',
		key: '9'
	}
] as const;

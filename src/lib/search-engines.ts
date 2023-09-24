type SearchEngine = {
	id: string;
	title: string;
	searchUrl: string;
};

export const searchEngines = [
	{
		id: 'google',
		title: 'Google',
		searchUrl: 'https://google.com/search?q='
	},
	{
		id: 'duckduckgo',
		title: 'DuckDuckGo',
		searchUrl: 'https://duckduckgo.com/?q='
	},
	{
		id: 'bing',
		title: 'Bing',
		searchUrl: 'https://bing.com/search?q='
	}
] satisfies Array<SearchEngine>;

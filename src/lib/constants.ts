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

export const habits = [
	{
		title: 'Plan',
		description: 'Create a TODO list for the day'
	},
	{
		title: 'Vitamins',
		description: 'Take your vitamins'
	},
	{
		title: 'Meditate',
		description: 'Meditate for a few minutes'
	},
	{
		title: 'Read',
		description: 'Read for 20 minutes'
	},
	{
		title: 'Water',
		description: 'Drink some water. At least 1 glass'
	},
	{
		title: 'Exercise',
		description: 'Lift some weights for a few minutes'
	},
	{
		title: 'Journal',
		description: 'Write in your journal'
	}
] as const;

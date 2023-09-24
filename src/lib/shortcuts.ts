type Shortcut = {
	title: string;
	url: string;
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
] satisfies Array<Shortcut>;

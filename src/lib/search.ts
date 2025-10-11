import { searchEngines } from './constants';

export function buildSearchQuery(engine: string, query: string): string {
	const searchEngine = searchEngines.find((e) => e.id === engine);

	if (!searchEngine) {
		throw new Error(`Search engine with id "${engine}" not found.`);
	}

	return `${searchEngine.searchUrl}${encodeURIComponent(query)}`;
}

import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { searchEngines } from '$lib/search-engines';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const search = formData.get('q');
		const engine = formData.get('engine');

		if (typeof search !== 'string') {
			return fail(400, {
				message: 'Bad request'
			});
		}

		if (typeof engine === 'string') {
			const searchEngine = searchEngines.find((e) => e.id === engine);

			if (searchEngine) {
				throw redirect(302, `${searchEngine.searchUrl}${encodeURIComponent(search)}`);
			}
		}

		throw fail(400, {
			message: 'Bad request'
		});
	}
} satisfies Actions;

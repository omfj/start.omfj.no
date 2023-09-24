import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const search = formData.get('q');

		if (typeof search !== 'string') {
			return fail(400, {
				message: 'Bad request'
			});
		}

		throw redirect(302, `https://google.com/search?q=${encodeURIComponent(search)}`);
	}
} satisfies Actions;

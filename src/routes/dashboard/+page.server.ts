import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {
	const { session } = await safeGetSession();

	if (!session) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	default: async ({ locals: { supabase, safeGetSession } }) => {
		const { session } = await safeGetSession();

		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/');
		}
	}
};

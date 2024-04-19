import type { PageServerLoad, Actions } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { formSchema } from '$lib/schema';
import { zod } from 'sveltekit-superforms/adapters';
import { AuthApiError } from '@supabase/supabase-js';

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
	const { session } = await safeGetSession();

	if (session) {
		throw redirect(303, '/dashboard');
	}

	return {
		form: await superValidate(zod(formSchema)),
		url: url.origin
	};
};

export const actions: Actions = {
	default: async (event) => {
		const {
			request,
			locals: { supabase }
		} = event;

		const formData = await request.formData();
		const form = await superValidate(formData, zod(formSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			if (error instanceof AuthApiError && error.status === 400) {
				return message(form, 'Invalid email or password');
			}
			return fail(500, {
				message: 'Server error, please try again later',
				form
			});
		}

		return {
			form,
			success: redirect(303, '/dashboard')
		};
	}
};

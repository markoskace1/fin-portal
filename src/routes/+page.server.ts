import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, type Actions, redirect } from '@sveltejs/kit';
import { db, lucia } from '$lib/server/auth';
import { Argon2id } from 'oslo/password';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) redirect(302, '/dashboard');

	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;

		const existingUser = await db.execute({
			sql: 'SELECT * FROM user WHERE username = ?',
			args: [username]
		});

		if (!existingUser) {
			return fail(400, {
				message: 'Invalid username or password'
			});
		}

		const validPassword = await new Argon2id().verify(
			existingUser.rows[0].hashed_password as string,
			password
		);
		if (!validPassword) {
			return fail(400, {
				message: 'Invalid username or password'
			});
		}

		const session = await lucia.createSession(existingUser.rows[0].id as string, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/dashboard');
	}
};

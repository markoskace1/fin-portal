import { z } from 'zod';

export const formSchema = z.object({
	username: z
		.string()
		.min(2, 'Uporabniško ime je prekratko')
		.max(50, 'Uporabniško ime je predolgo'),
	password: z.string().min(6, 'Geslo mora imeti najmanj 6 znakov').max(50, 'Geslo je predolgo')
});

export type FormSchema = typeof formSchema;

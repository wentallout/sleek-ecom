import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.string().min(5).max(50).email(),
	password: z
		.string()
		.min(5)
		.max(50)
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
			'Your password need to contain at least one lowercase letter, one uppercase letter, one digit, one special character, and is at least 8 characters long.'
		)
});

export const signUpFormSchema = z
	.object({
		email: z.string().min(5).max(50).email(),
		password: z
			.string()
			.min(5)
			.max(50)
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
				'Your password need to contain at least one lowercase letter, one uppercase letter, one digit, one special character, and is at least 8 characters long.'
			),
		confirmPassword: z.string()
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Confirm password don't match",
		path: ['confirmPassword']
	});

export type LoginFormSchema = typeof loginFormSchema;

export type SignUpFormSchema = typeof signUpFormSchema;

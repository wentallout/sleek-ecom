import { superValidate } from 'sveltekit-superforms';
import { loginFormSchema } from '$types/schema';
import { zod } from 'sveltekit-superforms/adapters';

import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async () => {
	return {
		form: await superValidate(zod(loginFormSchema))
	};
};

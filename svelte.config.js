import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({
			runtime: 'edge'
		}),
		alias: {
			utils: '$lib/utils',
			components: '$lib/components'
		}
	}
};

export default config;

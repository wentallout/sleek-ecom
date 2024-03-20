import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		alias: {
			$utils: './src/lib/utils',
			$components: './src/lib/components',
			$sections: './src/lib/sections',
			$images: './src/assets/images',
			$icons: './src/assets/icons'
		}
	}
};

export default config;

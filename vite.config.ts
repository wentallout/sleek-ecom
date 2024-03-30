import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';
import { inlineSvg } from '@svelte-put/preprocess-inline-svg/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
		// inlineSvg(
		// 	[
		// 		{
		// 			directories: 'src/assets/icons',
		// 			attributes: {
		// 				class: 'icon',
		// 				fill: 'currentColor'
		// 			}
		// 		}
		// 	],
		// 	{
		// 		inlineSrcAttributeName: 'inline-src'
		// 	}
		// ),
		enhancedImages(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			defaultClass: 'icon'
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

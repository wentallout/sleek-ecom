import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';
import { inlineSvg } from '@svelte-put/preprocess-inline-svg/vite';

export default defineConfig({
	plugins: [
		inlineSvg(
			[
				{
					directories: 'src/assets/icons',
					attributes: {
						class: 'icon',
						width: '24',
						height: '24'
					}
				}
			],
			{
				inlineSrcAttributeName: 'inline-src'
			}
		),
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

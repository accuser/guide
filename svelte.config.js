import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fg from 'fast-glob';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		paths: {
			base: process.env.BASE_PATH
		},
		prerender: {
			handleHttpError: (error) => {
				console.error(error);
				return { html: '<h1>Something went wrong</h1>' };
			},
			entries: fg
				.globSync(['content', '**', '*.md'].join(path.sep), { cwd: process.cwd() })
				.map((entry) => entry.replace(/(^content)|(index\.md$)|(\.md$)/g, ''))
		}
	},
	preprocess: vitePreprocess()
};

export default config;

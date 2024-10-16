import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { Glob } from 'glob';
import path from 'node:path';

const entries = () => {
	const entries = [];
	const pattern = ['docs', '**', '*.md'].join(path.sep);

	const glob = new Glob(pattern, { cwd: process.cwd() });

	for (const entry of glob) {
		const slug = entry.replace(/(^docs)|(index\.md$)|(\.md$)/g, '');

		entries.push(slug);
	}

	return entries;
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		prerender: {
			entries: entries()
		}
	},
	preprocess: vitePreprocess()
};

export default config;

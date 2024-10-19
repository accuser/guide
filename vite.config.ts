import { sveltekit } from '@sveltejs/kit/vite';
import { quickpickle } from 'quickpickle';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [quickpickle(), sveltekit()],
	server: {
		host: '0.0.0.0'
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

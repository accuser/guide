import { astFromMarkdown } from '$lib/ast/ast-from-markdown';
import { error } from '@sveltejs/kit';
import { readFile } from 'node:fs/promises';
import type { PageServerLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

const allowed = (value: string) => Boolean(value) && value.startsWith('.') === false;

export const load = (async ({ params: { slug } }) => {
	const path = slug.split('/').filter(allowed).join('/');

	try {
		const src = await Promise.any(
			['.md', '/index.md'].map((suffix) => readFile(`docs/${path}${suffix}`, 'utf-8'))
		);

		return { ast: astFromMarkdown(src) };
	} catch {
		throw error(404, 'Not found');
	}
}) satisfies PageServerLoad;

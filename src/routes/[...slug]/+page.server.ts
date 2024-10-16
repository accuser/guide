import { astFromMarkdown } from '$lib/ast/ast-from-markdown';
import { readFile } from 'node:fs/promises';
import type { PageServerLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

const allowed = (value: string) => Boolean(value) && value.startsWith('.') === false;

export const load = (async ({ params: { slug } }) => {
	const path = slug.split('/').filter(allowed).join('/');

	const src = await Promise.any(
		['.md', '/index.md'].map((suffix) => readFile(`docs/${path}${suffix}`, 'utf-8'))
	);

	return { ast: astFromMarkdown(src) };
}) satisfies PageServerLoad;

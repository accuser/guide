import { buildContentMap } from '$lib/server/site-content';
import type { LayoutServerLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load = (async () => {
	const site = await buildContentMap();

	console.log('site', site);

	return { site };
}) satisfies LayoutServerLoad;

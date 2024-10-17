import { isHeading } from '$lib/type-guards/mdast';
import GithubSlugger from 'github-slugger';
import type { Extension } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import { visit } from './visit.js';

declare module 'mdast' {
	interface HeadingData {
		id: string;
	}
}

export default (({ prefix } = {}) => ({
	transforms: [
		(root) => {
			const slugger = new GithubSlugger();

			visit(root, isHeading, (node) => {
				const text = toString(node.children);
				const slug = slugger.slug(text);

				const id = [prefix, slug].filter(Boolean).join('-');

				if (node.data) {
					node.data.id = id;
				} else {
					node.data = { id };
				}
			});
		}
	]
})) satisfies (options?: { prefix?: string }) => Extension;

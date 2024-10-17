import { isHeading } from '$lib/type-guards/mdast';
import type { Heading, Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { collect } from './collect.js';

const buildGetTitle = (ast: Root) => {
	const heading = collect(ast, (node): node is Heading => isHeading(node) && node.depth === 1)[0];

	const title = heading ? toString(heading) : undefined;

	return () => title;
};

export { buildGetTitle };

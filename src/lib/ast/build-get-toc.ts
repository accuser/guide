import { isHeading } from '$lib/type-guards/mdast';
import { slug } from 'github-slugger';
import type { Heading, List, Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { collect } from './collect';

export type Depth = Heading['depth'];

const buildGetToc = (root: Root) => {
	const headings = collect(root, isHeading);

	return (minDepth: Depth = 1, maxDepth: Depth = 6, ordered?: true): List =>
		headings
			.filter(({ depth }) => depth >= minDepth && depth <= maxDepth)
			.reduce(
				(acc, { children, data }) => {
					const { id = slug(toString(children)) } = data && 'id' in data ? data : { id: undefined };

					acc.children.push({
						type: 'listItem',
						children: [
							{
								type: 'paragraph',
								children: [
									{
										type: 'link',
										children: [{ type: 'text', value: toString(children) }],
										url: `#${id}`
									}
								]
							}
						]
					});

					return acc;
				},
				{ type: 'list' as const, ordered, children: [] } as List
			);
};

export { buildGetToc };

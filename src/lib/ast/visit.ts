import { isParent } from '$lib/type-guards/mdast.js';
import type { Node } from 'unist';

const visit = <T extends Node>(
	tree: Node,
	guard: (value: unknown) => value is T,
	visitor: (node: T) => void
) => {
	if (guard(tree)) {
		visitor(tree);
	}

	if (isParent(tree)) {
		for (const child of tree.children) {
			visit(child, guard, visitor);
		}
	}
};

export { visit };

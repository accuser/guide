import type { Node } from 'unist';
import { visit } from './visit.js';

const collect = <T extends Node>(tree: Node, guard: (value: unknown) => value is T) => {
	const nodes: T[] = [];

	visit(tree, guard, (node) => nodes.push(node));

	return nodes;
};

export { collect };

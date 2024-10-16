import type { Literal, Node, Parent } from 'unist';

export const isLiteral = (value: unknown): value is Literal => isNode(value) && 'value' in value;

export const isNode = (value: unknown): value is Node =>
	value !== undefined &&
	value !== null &&
	typeof value === 'object' &&
	'type' in value &&
	typeof value.type === 'string';

export const isParent = (value: unknown): value is Parent =>
	isNode(value) && 'children' in value && Array.isArray(value.children);

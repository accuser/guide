import { isDefinition } from '$lib/type-guards/mdast';
import type { Root } from 'mdast';
import { collect } from './collect';

const buildGetDefinition = (ast: Root) => {
	const definitions = collect(ast, isDefinition).reduce(
		(acc, definition) => Object.assign(acc, { [definition.identifier]: definition }),
		{} as Record<string, import('mdast').Definition>
	);

	return (identifier: string | null | undefined) =>
		identifier !== null && identifier !== undefined ? definitions[identifier] : undefined;
};

export { buildGetDefinition };

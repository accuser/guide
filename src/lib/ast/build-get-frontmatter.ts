import { isRoot, isYaml } from '$lib/type-guards/mdast.js';
import type { Root } from 'mdast';
import { parse } from 'yaml';

const buildGetFrontmatter = (ast: Root) => {
	let frontmatter: Record<string, unknown> = {};

	try {
		if (isRoot(ast) && ast.children && isYaml(ast.children[0])) {
			frontmatter = parse(ast.children[0].value);
		}
	} catch (error) {
		console.error(error);
	}

	return <T extends Record<string, unknown>>() => frontmatter as T;
};

export { buildGetFrontmatter };

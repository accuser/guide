import type { buildGetDefinition } from '$lib/ast/build-get-definition';
import type { buildGetFrontmatter } from '$lib/ast/build-get-frontmatter';
import type { buildGetTitle } from '$lib/ast/build-get-title';
import type { buildGetToc } from '$lib/ast/build-get-toc';

export type AstContext = {
	getDefinition: ReturnType<typeof buildGetDefinition>;
	getFrontmatter: ReturnType<typeof buildGetFrontmatter>;
	getTitle: ReturnType<typeof buildGetTitle>;
	getToc: ReturnType<typeof buildGetToc>;
};

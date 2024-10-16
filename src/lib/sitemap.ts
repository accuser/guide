import { Glob } from 'glob';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { astFromMarkdown } from './ast/ast-from-markdown';
import { buildGetFrontmatter } from './ast/build-get-frontmatter';
import { buildGetTitle } from './ast/build-get-title';

const sitemap = async () => {
	const map = new Map<string, string>();

	const pattern = ['docs', '**', '*.md'].join(path.sep);

	for await (const entry of new Glob(pattern, { cwd: process.cwd() })) {
		const src = await readFile(entry, 'utf-8');

		const ast = astFromMarkdown(src);

		const getFrontmatter = buildGetFrontmatter(ast);
		const getTitle = buildGetTitle(ast);

		const { title = getTitle() } = getFrontmatter() as { title?: string };

		if (title) {
			const slug = entry.replace(/(^docs)|(index\.md$)|(\.md$)/g, '');

			map.set(slug, title);
		}
	}

	console.log(JSON.stringify(Object.fromEntries(map), null, 2));

	return map;
};

export { sitemap };

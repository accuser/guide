import { directiveFromMarkdown } from 'mdast-util-directive';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { mathFromMarkdown } from 'mdast-util-math';
import { directive } from 'micromark-extension-directive';
import { frontmatter } from 'micromark-extension-frontmatter';
import { gfm } from 'micromark-extension-gfm';
import { math } from 'micromark-extension-math';
import imputeHeadingId from './impute-heading-id';

const astFromMarkdown = (src: string) =>
	fromMarkdown(src, {
		extensions: [directive(), frontmatter(), gfm(), math()],
		mdastExtensions: [
			directiveFromMarkdown(),
			frontmatterFromMarkdown(),
			gfmFromMarkdown(),
			imputeHeadingId(),
			mathFromMarkdown()
		]
	});

export { astFromMarkdown };

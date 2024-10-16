import type { Comment, Doctype, Element, Literal, Node, Parent, Root } from 'hast';
import * as unist from './unist.js';

const isComment = (value: unknown): value is Comment =>
	isLiteral(value) && value.type === 'comment';

const isDoctype = (value: unknown): value is Doctype => isNode(value) && value.type === 'doctype';

const isElement = (value: unknown): value is Element =>
	isNode(value) &&
	value.type === 'element' &&
	'tagName' in value &&
	typeof value.tagName === 'string';

const isLiteral = (value: unknown): value is Literal =>
	unist.isLiteral(value) && typeof value.value === 'string';

const isNode = (value: unknown): value is Node => unist.isNode(value);

const isParent = (value: unknown): value is Parent => unist.isParent(value);

const isRoot = (value: unknown): value is Root => isParent(value) && value.type === 'root';

const isText = (value: unknown): value is Text => isLiteral(value) && value.type === 'text';

export default { isComment, isDoctype, isElement, isLiteral, isNode, isParent, isRoot, isText };

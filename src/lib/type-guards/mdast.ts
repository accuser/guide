import type { Association, Definition, Heading, Literal, Node, Parent, Root, Yaml } from 'mdast';
import * as unist from './unist.js';

const isAssociation = (value: unknown): value is Association =>
	isNode(value) && 'identifier' in value && typeof value.identifier === 'string';

const isDefinition = (value: unknown): value is Definition =>
	isNode(value) && isAssociation(value) && isResource(value);

const isHeading = (value: unknown): value is Heading =>
	isParent(value) &&
	value.type === 'heading' &&
	'depth' in value &&
	typeof value.depth === 'number';

const isLiteral = (value: unknown): value is Literal =>
	unist.isLiteral(value) && typeof value.value === 'string';

const isNode = (value: unknown): value is Node => unist.isNode(value);

const isParent = (value: unknown): value is Parent => unist.isParent(value);

const isResource = (value: unknown): value is Definition =>
	isNode(value) && 'url' in value && typeof value.url === 'string';

const isRoot = (value: unknown): value is Root => isParent(value) && value.type === 'root';

const isYaml = (value: unknown): value is Yaml => isLiteral(value) && value.type === 'yaml';

export { isDefinition, isHeading, isLiteral, isNode, isParent, isRoot, isYaml };

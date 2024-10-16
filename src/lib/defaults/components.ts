import { hastComponents } from './hast-components';
import { mdastComponents } from './mdast-components';

const components = { ...hastComponents, ...mdastComponents };

export { components };

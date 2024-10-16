import Comment from '$lib/components/Comment.svelte';
import Doctype from '$lib/components/Doctype.svelte';
import Element from '$lib/components/Element.svelte';
import Root from '$lib/components/Root.svelte';
import Text from '$lib/components/Text.svelte';
import type { Components } from '$lib/types/components';

interface ComponentMap {
	comment: import('hast').Comment;
	doctype: import('hast').Doctype;
	element: import('hast').Element;
	root: import('hast').Root;
	text: import('hast').Text;
}

const hastComponents: Components<ComponentMap[keyof ComponentMap]> = {
	comment: Comment,
	doctype: Doctype,
	element: Element,
	root: Root,
	text: Text
};

export { hastComponents };

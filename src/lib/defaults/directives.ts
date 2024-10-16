import Toc from '$lib/directives/Toc.svelte';
import type { Directives } from '$lib/types/directives';
import type { LeafDirective } from 'mdast-util-directive';

interface DirectiveMap {
	toc: LeafDirective;
}

const directives: Directives<DirectiveMap[keyof DirectiveMap]> = {
	toc: Toc
};

export { directives };

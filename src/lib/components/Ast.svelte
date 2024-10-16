<script lang="ts">
	import { buildGetDefinition } from '$lib/ast/build-get-definition';
	import { buildGetFrontmatter } from '$lib/ast/build-get-frontmatter';
	import { buildGetTitle } from '$lib/ast/build-get-title';
	import { buildGetToc, type Depth } from '$lib/ast/build-get-toc';
	import { setAstContext } from '$lib/context/ast-content';
	import { components } from '$lib/defaults/components';
	import { directives } from '$lib/defaults/directives';
	import type { Root } from 'mdast';
	import Node from './Node.svelte';

	const { ast }: { ast: Root } = $props();

	let getDefinition = $derived.by(() => buildGetDefinition(ast));
	let getFrontmatter = $derived.by(() => buildGetFrontmatter(ast));
	let getTitle = $derived.by(() => buildGetTitle(ast));
	let getToc = $derived.by(() => buildGetToc(ast));

	setAstContext({
		components,
		directives,
		getDefinition: (identfier: string | null | undefined) => getDefinition(identfier),
		getFrontmatter: () => getFrontmatter(),
		getTitle: () => getTitle(),
		getToc: (minDepth?: Depth, maxDepth?: Depth, ordered?: true) =>
			getToc(minDepth, maxDepth, ordered)
	});
</script>

<Node {...ast} />

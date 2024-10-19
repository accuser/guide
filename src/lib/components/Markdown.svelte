<script lang="ts">
	import { buildGetDefinition } from '$lib/ast/build-get-definition';
	import { buildGetFrontmatter } from '$lib/ast/build-get-frontmatter';
	import { buildGetTitle } from '$lib/ast/build-get-title';
	import { buildGetToc, type Depth } from '$lib/ast/build-get-toc';
	import { setAstContext } from '$lib/context/ast-content';
	import Node from './Mdast/Node.svelte';

	const { ast }: { ast: import('mdast').Root } = $props();

	let getDefinition = $derived.by(() => buildGetDefinition(ast));
	let getFrontmatter = $derived.by(() => buildGetFrontmatter(ast));
	let getTitle = $derived.by(() => buildGetTitle(ast));
	let getToc = $derived.by(() => buildGetToc(ast));

	setAstContext({
		getDefinition: (identfier: string | null | undefined) => getDefinition(identfier),
		getFrontmatter: () => getFrontmatter(),
		getTitle: () => getTitle(),
		getToc: (minDepth?: Depth, maxDepth?: Depth, ordered?: true) =>
			getToc(minDepth, maxDepth, ordered)
	});
</script>

<Node {...ast} />

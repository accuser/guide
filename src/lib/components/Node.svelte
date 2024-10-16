<script lang="ts">
	import { getAstContext } from '$lib/context/ast-content';
	import { isLiteral, isParent } from '$lib/type-guards/unist.js';
	import Node from './Node.svelte';

	let node: import('unist').Node = $props();

	let { components } = getAstContext();

	let Component = $derived(
		components[node.type as keyof typeof components] as import('svelte').Component<
			import('unist').Node
		>
	);
</script>

{#if Component}
	<Component {...node} />
{:else if isParent(node)}{#each node.children as child}<Node
			{...child}
		/>{/each}{:else if isLiteral(node)}{node.value}{/if}

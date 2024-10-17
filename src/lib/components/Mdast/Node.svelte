<script lang="ts">
	import { mdastComponents } from '$lib/defaults/mdast-components.js';
	import { isLiteral, isParent } from '$lib/type-guards/mdast.js';
	import Node from './Node.svelte';

	let node: import('mdast').Node = $props();

	let Component = $derived(
		mdastComponents[node.type as keyof typeof mdastComponents] as import('svelte').Component<
			import('mdast').Node
		>
	);
</script>

{#if Component}<Component {...node} />{:else if isParent(node)}{#each node.children as child}<Node
			{...child}
		/>{/each}{:else if isLiteral(node)}{node.value}{/if}

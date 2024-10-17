<script lang="ts">
	import { hastComponents } from '$lib/defaults/hast-components.js';
	import { isLiteral, isParent } from '$lib/type-guards/unist.js';
	import Node from './Node.svelte';

	let node: import('mdast').Node = $props();

	let Component = $derived(
		hastComponents[node.type as keyof typeof hastComponents] as import('svelte').Component<
			import('mdast').Node
		>
	);
</script>

{#if Component}<Component {...node} />{:else if isParent(node)}{#each node.children as child}<Node
			{...child}
		/>{/each}{:else if isLiteral(node)}{node.value}{/if}

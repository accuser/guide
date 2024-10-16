<script lang="ts">
	import type { Heading } from 'mdast';
	import Node from './Node.svelte';

	let { children, depth }: Heading = $props();

	let tag = $derived.by(() => `h${depth}`);
</script>

<svelte:element this={tag}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>

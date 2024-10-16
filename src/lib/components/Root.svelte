<script lang="ts">
	import Node from './Node.svelte';

	let { children }: import('hast').Root | import('mdast').Root = $props();
</script>

{#each children as node}<Node {...node} />{/each}

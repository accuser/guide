<script lang="ts">
	import type { ListItem } from 'mdast';
	import Node from './Node.svelte';

	let { children }: ListItem = $props();
</script>

<li>
	{#each children as node}<Node {...node} />{/each}
</li>

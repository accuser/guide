<script lang="ts">
	import type { Link } from 'mdast';
	import A from '../A.svelte';
	import Node from './Node.svelte';

	let { children, title, url }: Link = $props();
</script>

<A href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</A
>

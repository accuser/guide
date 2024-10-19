<script lang="ts">
	import type { Link } from 'mdast';
	import Anchor from '../Anchor.svelte';
	import Node from './Node.svelte';

	let { children, title, url }: Link = $props();
</script>

<Anchor href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</Anchor
>

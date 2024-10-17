<script lang="ts">
	import { page } from '$app/stores';
	import type { Link } from 'mdast';
	import Node from './Node.svelte';

	let { children, title, url }: Link = $props();

	let { href } = $derived.by(() => new URL(url, $page.url));
</script>

<a {href} {title}
	>{#each children as node}<Node {...node} />{/each}</a
>

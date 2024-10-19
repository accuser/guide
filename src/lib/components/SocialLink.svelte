<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import Anchor from './Anchor.svelte';

	let {
		href,
		icon: Icon,
		children
	}: { href: string; icon: Component; children: Snippet } = $props();
</script>

<Anchor {href} class="group">
	<span class="sr-only">{@render children?.()}</span>
	<Icon
		class="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
	/>
</Anchor>

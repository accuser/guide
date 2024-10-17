<script lang="ts">
	import { getAstContext } from '$lib/context/ast-content';
	import type { Root } from 'mdast';
	import Node from './Node.svelte';

	let { children }: Root = $props();

	let { getFrontmatter, getTitle } = $derived.by(() => getAstContext());

	let { title = 'Untitled' } = $derived.by(() => {
		const { title = getTitle() } = getFrontmatter<{ title: string }>();

		return { title };
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article>
	<h1>{title}</h1>

	<main>
		{#each children as node}<Node {...node} />{/each}
	</main>
</article>

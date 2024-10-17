<script lang="ts">
	import { getAstContext } from '$lib/context/ast-content';
	import type { LinkReference } from 'mdast';
	import Node from './Node.svelte';

	// TODO: implement `referenceType`?
	let { children, identifier }: LinkReference = $props();

	const { getDefinition } = getAstContext();

	let { url, title } = $derived.by(() => {
		const definition = getDefinition(identifier);

		if (definition) {
			return definition;
		} else {
			return { url: '#', title: undefined };
		}
	});
</script>

<a href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</a
>

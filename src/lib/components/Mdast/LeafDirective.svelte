<script lang="ts">
	import { leafDirectives } from '$lib/defaults/leaf-directives';
	import type { LeafDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name, ...props }: LeafDirective = $props();

	let Directive = $derived.by(() => {
		const key = name as keyof typeof leafDirectives;

		if (key in leafDirectives) {
			return leafDirectives[key];
		}
	});
</script>

{#if Directive}<Directive {children} {name} {...props} />{:else}
	<div class={name}>
		{#each children as node}<Node {...node} />{/each}
	</div>{/if}

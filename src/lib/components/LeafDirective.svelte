<script lang="ts">
	import { getAstContext } from '$lib/context/ast-content';
	import type { LeafDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name, ...props }: LeafDirective = $props();

	let { directives } = getAstContext();

	let Directive = $derived(
		directives[
			name as keyof typeof directives
		] as unknown as import('svelte').Component<LeafDirective>
	);
</script>

{#if Directive}
	<Directive {children} {name} {...props} />
{:else}
	{@html `<!-- Unrecognized leaf directive ::${name} -->`}
	<div class={name}>
		{#each children as node}<Node {...node} />{/each}
	</div>
{/if}

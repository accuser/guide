<script lang="ts">
	import { getAstContext } from '$lib/context/ast-content';
	import type { TextDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name, ...props }: TextDirective = $props();

	let { directives } = getAstContext();

	let Directive = $derived(
		directives[
			name as keyof typeof directives
		] as unknown as import('svelte').Component<TextDirective>
	);
</script>

{#if Directive}
	<Directive {children} {name} {...props} />
{:else}
	{@html `<!-- Unrecognized text directive :${name} -->`}
	<span class={name}>
		{#each children as node}<Node {...node} />{/each}
	</span>
{/if}

<script lang="ts">
	import { getAstContext } from '$lib/context/ast-content';
	import type { ContainerDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name, ...props }: ContainerDirective = $props();

	let { directives } = getAstContext();

	let Directive = $derived(
		directives[
			name as keyof typeof directives
		] as unknown as import('svelte').Component<ContainerDirective>
	);
</script>

{#if Directive}
	<Directive {children} {name} {...props} />
{:else}
	{@html `<!-- Unrecognized container directive :::${name} -->`}
	<div class={name}>
		{#each children as node}<Node {...node} />{/each}
	</div>
{/if}

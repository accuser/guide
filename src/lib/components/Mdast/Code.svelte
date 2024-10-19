<script lang="ts">
	import type { Code } from 'mdast';
	import CopyButton from '../CopyButton.svelte';
	import Node from '../Hast/Node.svelte';

	let { lang, meta, value, data }: Code = $props();

	let ast = $derived(
		data?.ast
			? data.ast
			: {
					type: 'text' as const,
					value
				}
	);
</script>

<pre><code {lang} data-meta={meta}><Node {...ast} /></code><CopyButton {value} /></pre>

<style lang="postcss">
	pre {
		@apply relative;
		@apply overflow-x-auto;
	}

	code {
		@apply block;
	}
</style>

<script lang="ts">
	import { astFromCode } from '$lib/ast/ast-from-code';
	import Hast from '$lib/components/Hast.svelte';
	import type { Code } from 'mdast';
	import CopyButton from '../CopyButton.svelte';

	let { lang, meta, value }: Code = $props();
</script>

<pre><code {lang} data-meta={meta}
		>{#await astFromCode(value, lang)}{value}{:then ast}<Hast {ast} />{:catch}{value}{/await}</code
	><CopyButton {value} />
</pre>

<style lang="postcss">
	pre {
		@apply relative;
		@apply overflow-x-auto;
	}

	code {
		@apply block;
	}
</style>

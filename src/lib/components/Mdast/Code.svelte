<script lang="ts">
	import { astFromCode } from '$lib/ast/ast-from-code';
	import Hast from '$lib/components/Hast.svelte';
	import type { Code } from 'mdast';

	let { lang, meta, value }: Code = $props();
</script>

<pre><code {lang} data-meta={meta}
		>{#await astFromCode(value, lang)}{value}{:then ast}<Hast {ast} />{:catch}{value}{/await}</code
	></pre>

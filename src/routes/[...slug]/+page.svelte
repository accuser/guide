<script lang="ts">
	import Ast from '$lib/components/Ast.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let { ast } = $derived(data);
</script>

<article class="prose prose-lg max-w-prose mx-auto prose-slate dark:prose-invert">
	<Ast {ast} />
</article>

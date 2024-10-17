<script lang="ts">
	import Mdast from '$lib/components/Mdast.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let { ast } = $derived(data);
</script>

<Mdast {ast} />

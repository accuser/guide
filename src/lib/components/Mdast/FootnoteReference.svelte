<script lang="ts">
	import type { FootnoteReference } from 'mdast';
	import Anchor from '../Anchor.svelte';

	let { identifier, label }: FootnoteReference = $props();
</script>

<sup
	><Anchor
		id="footnote-ref-{identifier}"
		href="#footnote-{identifier}"
		aria-describedby="footnote-label">{label}</Anchor
	></sup
>

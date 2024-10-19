<script lang="ts">
	import type { FootnoteReference } from 'mdast';
	import A from '../A.svelte';

	let { identifier, label }: FootnoteReference = $props();
</script>

<sup
	><A id="footnote-ref-{identifier}" href="#footnote-{identifier}" aria-describedby="footnote-label"
		>{label}</A
	></sup
>

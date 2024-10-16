<script lang="ts">
	type Props = import('hast').Text | import('mdast').Text;

	let { value }: Props = $props();
</script>

{value}

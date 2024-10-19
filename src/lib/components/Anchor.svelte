<script lang="ts">
	import { base } from '$app/paths';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, ...props }: HTMLAnchorAttributes = $props();

	let href = $derived.by(() => {
		const { href } = props;

		if (href === undefined || href === null || base === '') {
			// do nothing
		} else if (href.startsWith('/')) {
			return `${base}${href}`;
		} else {
			// do nothing
		}

		return href;
	});
</script>

<a {...props} {href}>{@render children?.()}</a>

<script lang="ts">
	import { base } from '$app/paths';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, href, ...props }: HTMLAnchorAttributes = $props();

	if (href === undefined || href === null) {
		// do nothing
	} else if (href.startsWith(base)) {
		// do nothing
	} else if (href.startsWith('/')) {
		href = base + href;
	} else {
		// do nothing
	}
</script>

<a {...props} {href}>{@render children?.()}</a>

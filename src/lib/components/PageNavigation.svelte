<script lang="ts">
	let pathname = usePathname();
	let allPages = navigation.flatMap((group) => group.links);
	let currentPageIndex = allPages.findIndex((page) => page.href === pathname);

	if (currentPageIndex === -1) {
		return null;
	}

	let previousPage = allPages[currentPageIndex - 1];
	let nextPage = allPages[currentPageIndex + 1];

	if (!previousPage && !nextPage) {
		return null;
	}
</script>

<div class="flex">
	{#if previousPage}
		<div class="flex flex-col items-start gap-3">
			<PageLink label="Previous" page={previousPage} previous />
		</div>
	{/if}
	{#if nextPage}
		<div class="ml-auto flex flex-col items-end gap-3">
			<PageLink label="Next" page={nextPage} />
		</div>
	{/if}
</div>

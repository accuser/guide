<script lang="ts">
	import A from '$lib/components/A.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import '../app.css';

	const { children } = $props();
</script>

<div class="h-full lg:ml-72 xl:ml-80">
	<header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
		<div
			class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10"
		>
			<div class="hidden lg:flex">
				<A href="/" aria-label="Home">
					<Logo class="h-6" />
				</A>
			</div>
			<!-- <Header />
			<Navigation class="hidden lg:mt-10 lg:block" />  -->
		</div>
	</header>
	<div class="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
		<main class="flex-auto">{@render children?.()}</main>
		<!-- <Footer /> -->
	</div>
</div>

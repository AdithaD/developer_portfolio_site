<script lang="ts">
	import TabButton from './TabButton.svelte';

	import { games, software } from '$lib';
	import GalleryCard from './GalleryCard.svelte';
	import { fade } from 'svelte/transition';

	type Views = 'games' | 'software';

	let view: Views = $state<Views>('games');

	let showScrollButton = $state(false);

	$inspect(showScrollButton);

	function scrollFunction() {
		console.log(showScrollButton);
		showScrollButton =
			(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) &&
			window.innerWidth < 1024;
	}
</script>

<svelte:window on:scroll={scrollFunction} />

<div class="flex w-full flex-col items-center text-orange-300">
	<div class="flex h-[75vh] w-full items-center justify-center bg-cyan-950">
		<div
			class="flex h-full w-full flex-col items-center justify-between border-l-2 border-r-2 border-cyan-950 bg-cyan-900 p-12 shadow-2xl md:flex-row lg:w-2/3 lg:p-32"
		>
			<div class="flex flex-col">
				<h1 class="text-5xl font-bold">Dora, the Developer</h1>
				<p class="font-bold">I like all things computers.</p>
				<div class="mt-12">
					<p class="texl-2xl mb-2 font-semibold">Find me on:</p>
					<a
						class="flex w-36 items-center justify-evenly rounded-lg border-2 border-cyan-950 bg-orange-200 px-4 py-2 text-xl font-bold text-cyan-950 hover:bg-orange-300"
						href="https://github.com/adithad"
						><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" height="24px"
							><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
							/></svg
						>Github</a
					>
				</div>
			</div>
			<div class="aspect-square">
				<img
					src="hamster.png"
					alt="A hamster."
					class="h-64 w-64 overflow-visible object-cover md:h-96 md:w-96"
				/>
			</div>
		</div>
	</div>
	<div class="flex w-full justify-center bg-orange-300 text-cyan-700">
		<div
			class="flex justify-center border-r-2 border-cyan-950 bg-orange-200 p-12 lg:w-2/3 lg:border-l-2"
		>
			<div class="w-full">
				<div class="flex space-x-4">
					<TabButton selected={view} index="games" onclick={() => (view = 'games')}
						>My Games</TabButton
					>
					<TabButton selected={view} index="software" onclick={() => (view = 'software')}
						>My Software</TabButton
					>
				</div>
				<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{#if view == 'games'}
						{#each games as game}
							<GalleryCard {...game}></GalleryCard>
						{/each}
					{:else}
						{#each software as sw}
							<GalleryCard {...sw}></GalleryCard>
						{/each}
					{/if}
				</div>
				{#if showScrollButton}
					<button
						class="fixed bottom-4 right-4 z-10 ml-4 self-end rounded-lg border-2 border-cyan-950 bg-cyan-700 px-4 py-1 text-2xl font-bold text-orange-300 hover:bg-cyan-200"
						in:fade={{ duration: 200 }}
						out:fade={{ duration: 200 }}
						onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						Top
					</button>
				{/if}
			</div>
		</div>
	</div>
	<footer class="flex w-full justify-center bg-cyan-950 py-4">
		<p>
			If you like what I do,
			<a href="https://www.buymeacoffee.com/adithad"
				><img
					alt="Buy me a coffee"
					src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=adithad&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff"
				/></a
			>
		</p>
	</footer>
</div>

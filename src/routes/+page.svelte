<script lang="ts">
	import TabButton from './TabButton.svelte';

	import { games, software } from '$lib';
	import GalleryCard from './GalleryCard.svelte';

	type Views = 'games' | 'software';

	let view: Views = $state<Views>('games');
</script>

<div class="flex w-full flex-col items-center text-orange-300">
	<div class="flex h-[75vh] w-full items-center justify-center bg-cyan-950">
		<div
			class="flex h-full w-2/3 items-center justify-between border-l-2 border-r-2 border-cyan-950 bg-cyan-900 p-32 shadow-2xl"
		>
			<div class="flex flex-col">
				<div class="font-mono">Hi, I'm</div>
				<h1 class="text-5xl font-bold">Dora the Developer</h1>
				<p class="font-bold">I like all things computers.</p>
			</div>
			<div class="aspect-square w-1/3">
				<img src="hamster.png" alt="A hamster." class="h-full w-full object-cover" />
			</div>
		</div>
	</div>
	<div class="flex w-full justify-center bg-orange-300 text-cyan-700">
		<div
			class="flex w-2/3 justify-center space-x-16 border-l-2 border-r-2 border-cyan-950 bg-orange-200 p-16"
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
				<div class="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
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

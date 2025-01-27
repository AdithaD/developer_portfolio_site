<script lang="ts">
	import type { GalleryItem } from '$lib';

	let { title, description, externalLink, src, dateReleased }: GalleryItem = $props();
</script>

<div class="flex h-80 flex-col rounded-lg border-2 border-cyan-950 bg-orange-100 p-4 shadow">
	<div class="relative mb-4 h-1/2 overflow-hidden">
		{#if dateReleased}
			<div
				class="border-1 absolute right-1 top-1 rounded-lg border-2 border-cyan-950 bg-orange-200 px-4 py-1 font-semibold"
			>
				Released: {dateReleased?.toLocaleDateString()}
			</div>
		{/if}
		<img {src} alt="A game." class="w-full" />
	</div>
	<div class="flex flex-grow">
		<div class="">
			<div class="text-2xl font-bold">{title}</div>
			<div class="text-wrap">{description}</div>
		</div>
		{#if externalLink}
			<a
				class="ml-4 self-end rounded-lg border-2 border-cyan-700 bg-orange-200 px-4 py-1 text-2xl font-bold hover:bg-orange-300"
				href={externalLink}
				aria-label="Play the game"
			>
				<div class="flex items-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</div>
			</a>
		{/if}
	</div>
</div>

<script lang="ts">
	let { index, selected, onclick, children } = $props();
</script>

<button
	class="mb-8 text-2xl font-bold lg:text-4xl {index != selected
		? 'text-slate-600 hover:text-cyan-600'
		: 'rounded-lg border-2 border-cyan-950 p-2 text-cyan-700'}"
	{onclick}
>
	{@render children?.()}
</button>

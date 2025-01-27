<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen font-sans">
	{@render children()}
</div>

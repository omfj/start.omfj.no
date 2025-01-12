<script lang="ts">
	import Date from '$lib/components/Date.svelte';
	import Search from '$lib/components/Search.svelte';
	import Shortcuts from '$lib/components/Shortcuts.svelte';
</script>

<svelte:head>
	<title>omfj | Start</title>
</svelte:head>

<main class="mx-auto w-full max-w-3xl space-y-16 px-4 py-24">
	<Date />
	<Search />
	<Shortcuts />
</main>

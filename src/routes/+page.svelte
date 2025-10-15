<script lang="ts">
	import Date from '$lib/components/Date.svelte';
	import Search from '$lib/components/Search.svelte';
	import Shortcuts from '$lib/components/Shortcuts.svelte';
</script>

<svelte:head>
	<title>omfj | Start</title>
</svelte:head>

<main class="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-8 px-6 py-12">
	<Date />
	<Search />
	<Shortcuts />
</main>

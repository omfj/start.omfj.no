<script lang="ts">
	import Date from '$lib/components/Date.svelte';
	import Search from '$lib/components/Search.svelte';
	import Shortcuts from '$lib/components/Shortcuts.svelte';
</script>

<svelte:head>
	<title>omfj | Start</title>
</svelte:head>

<main class="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-10 px-8 py-12">
	<Date />
	<Search />
	<Shortcuts />
</main>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { shortcuts } from '$lib/shortcuts';
	import { format } from 'date-fns';
	import { onMount } from 'svelte';

	let searchQuery = '';
	let date = new Date();

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>omfj | Start</title>
</svelte:head>

<main class="max-w-3xl w-full mx-auto space-y-16 py-24 px-4">
	<div class="space-y-4 font-serif text-3xl flex items-center justify-between">
		<p>{format(date, 'yyy/mm/dd')}</p>
		<p>{format(date, 'HH:mm:ss')}</p>
	</div>

	<div class="space-y-4">
		<div>
			<h1 class="text-4xl font-serif">Search</h1>
		</div>

		<form method="post" use:enhance>
			<div class="relative">
				<input
					bind:value={searchQuery}
					type="search"
					name="q"
					class="w-full border border-grey-900 text-xl bg-transparent rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-grey-600 focus:border-transparent"
					placeholder="Search"
				/>
				<button
					type="submit"
					class="absolute inset-y-0 right-0 px-4 py-2 bg-dark-300 text-white rounded-e-lg"
				>
					Search
				</button>
			</div>
		</form>
	</div>

	<div class="space-y-4">
		<div class="space-y-2">
			<h1 class="text-4xl font-serif">Shortcuts</h1>
			<p class="text-neutral-300">A list of shortcuts I use on a daily basis.</p>
		</div>

		<ul class="grid grid-cols-1 sm:grid-cols-2 gap-5">
			{#each shortcuts as shortcut}
				<a href={shortcut.url}>
					<li
						class="border border-grey-900 rounded-lg p-4 space-y-2 first-letter:uppercase group hover:bg-grey-900 transition-colors duration-200 ease-in-out"
					>
						<h1 class="text-2xl font-light">{shortcut.title}</h1>
					</li>
				</a>
			{/each}
		</ul>
	</div>
</main>

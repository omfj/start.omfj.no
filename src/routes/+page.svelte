<script lang="ts">
	import { enhance } from '$app/forms';
	import { searchEngines } from '$lib/search-engines';
	import { shortcuts } from '$lib/shortcuts';
	import { format, getWeek } from 'date-fns';
	import { onMount } from 'svelte';

	let searchQuery = '';
	let date = new Date();
	let week = getWeek(date);

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	let selectedEngine = 'google';
</script>

<svelte:head>
	<title>omfj | Start</title>
</svelte:head>

<main class="max-w-3xl w-full mx-auto space-y-16 py-24 px-4">
	<div class="space-y-4 flex flex-col">
		<div class="font-mono text-center">
			<p>week: {week}</p>
		</div>

		<div class="flex items-center justify-between text-4xl font-serif">
			<p>{format(date, 'HH:mm:ss')}</p>
			<p>
				{format(date, 'MMM dd')}
			</p>
		</div>
	</div>

	<div class="space-y-4">
		<div>
			<h1 class="text-4xl font-serif">Search</h1>
		</div>

		<form method="post" use:enhance class="space-y-1">
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
			<div class="flex items-center gap-3">
				{#each searchEngines as engine}
					<div>
						<input
							type="radio"
							name="engine"
							id={engine.id}
							value={engine.id}
							checked={selectedEngine == engine.id}
							on:change={(e) => (selectedEngine = e.currentTarget.value)}
							hidden
						/>
						<label
							for={engine.id}
							class="cursor-pointer {selectedEngine === engine.id
								? 'underline text-grey-200'
								: 'text-grey-500'}">{engine.title}</label
						>
					</div>
				{/each}
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

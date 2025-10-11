<script lang="ts">
	import { isValidSearchEngine, searchEngines, type SearchEngine } from '$lib/constants';
	import { buildSearchQuery } from '$lib/search';
	import type { ChangeEventHandler } from 'svelte/elements';

	let searchQuery = $state('');
	let selectedEngine = $state<SearchEngine>('duckduckgo');

	const handleEngineChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const engine = e.currentTarget.value;
		if (!isValidSearchEngine(engine)) return;
		selectedEngine = engine;
	};

	const onsubmit = (e: Event) => {
		e.preventDefault();

		if (!searchQuery.trim()) return;
		const redirect = buildSearchQuery(selectedEngine, searchQuery);

		window.location.href = redirect;
	};
</script>

<div class="space-y-4">
	<div>
		<h1 class="font-mono text-3xl">Search</h1>
	</div>

	<form {onsubmit} class="space-y-3">
		<div class="flex">
			<input
				bind:value={searchQuery}
				type="search"
				name="q"
				class="flex-1 border-2 border-r-0 bg-transparent px-4 py-3 text-base focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none"
				placeholder="Search"
			/>
			<button
				type="submit"
				class="border-2 border-l-0 bg-gray-700 px-6 py-3 text-base text-white transition-colors duration-200 hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
			>
				Search
			</button>
		</div>
		<div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm uppercase tracking-wide">
			{#each searchEngines as engine (engine.id)}
				<div>
					<input
						type="radio"
						name="engine"
						class="hidden"
						id={engine.id}
						value={engine.id}
						checked={selectedEngine == engine.id}
						onchange={handleEngineChange}
						hidden
					/>
					<label
						for={engine.id}
						class="cursor-pointer {selectedEngine === engine.id
							? 'text-gray-200 underline'
							: 'text-gray-500'}">{engine.title}</label
					>
				</div>
			{/each}
		</div>
	</form>
</div>

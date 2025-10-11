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
		<h1 class="font-serif text-4xl">Search</h1>
	</div>

	<form {onsubmit} class="space-y-1">
		<div class="relative">
			<input
				bind:value={searchQuery}
				type="search"
				name="q"
				class="w-full rounded-lg border border-gray-900 bg-transparent px-4 py-2 text-xl focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
				placeholder="Search"
			/>
			<button
				type="submit"
				class="bg-dark-300 absolute inset-y-0 right-0 rounded-e-lg px-4 py-2 text-white"
			>
				Search
			</button>
		</div>
		<div class="flex items-center gap-3">
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

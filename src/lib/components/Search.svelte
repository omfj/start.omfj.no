<script lang="ts">
	import { isValidSearchEngine, searchEngines, type SearchEngine } from '$lib/constants';
	import { buildSearchQuery } from '$lib/search';
	import type { ChangeEventHandler } from 'svelte/elements';

	let searchElement = $state<HTMLInputElement | null>(null);
	let searchQuery = $state('');
	let selectedEngine = $state<SearchEngine>('duckduckgo');

	$effect(() => {
		searchElement?.focus();
	});

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

<form {onsubmit} class="space-y-2">
	<div class="flex">
		<input
			bind:this={searchElement}
			bind:value={searchQuery}
			type="search"
			name="q"
			autocomplete="off"
			class="flex-1 border-b bg-transparent py-3 text-base focus:border-gray-500 focus:outline-none"
			placeholder="Search"
		/>
	</div>
	<div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
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
					class="cursor-pointer {selectedEngine === engine.id ? 'text-gray-300' : 'text-gray-600'}"
					>{engine.title}</label
				>
			</div>
		{/each}
	</div>
</form>

<script lang="ts">
	import { searchEngines, type SearchEngine } from '$lib/constants';
	import { buildSearchQuery } from '$lib/search';

	let searchElement = $state<HTMLInputElement | null>(null);
	let searchQuery = $state('');
	let selectedEngine = $state<SearchEngine>('duckduckgo');

	$effect(() => {
		searchElement?.focus();
	});

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
			style="border-color: var(--border);"
			class="flex-1 border-b bg-transparent py-3 text-base focus:outline-none"
			onfocus={(e) => (e.currentTarget.style.borderColor = 'var(--border-focus)')}
			onblur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
			placeholder="Search"
		/>
	</div>
	<div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
		{#each searchEngines as engine (engine.id)}
			<button
				type="button"
				onclick={() => (selectedEngine = engine.id)}
				class="cursor-pointer focus:outline-none focus:underline {selectedEngine === engine.id
					? 'active-text'
					: 'muted'}">{engine.title}</button
			>
		{/each}
	</div>
</form>

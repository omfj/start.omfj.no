<script lang="ts">
	import { shortcuts } from '$lib/constants';

	function onkeydown(e: KeyboardEvent) {
		if (e.target instanceof HTMLInputElement) return;
		const shortcut = shortcuts.find((s) => s.key === e.key);
		if (shortcut) window.location.href = shortcut.url;
	}
</script>

<svelte:window {onkeydown} />

<ul class="grid grid-cols-2 gap-x-6 gap-y-2 text-base sm:grid-cols-3">
	{#each shortcuts as shortcut (shortcut.title)}
		<li class="flex items-center gap-2">
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<span class="font-mono text-xs muted">{shortcut.key}</span>
			<a href={shortcut.url} class="muted hover-text focus-text focus:outline-none">
				{shortcut.title}
			</a>
		</li>
	{/each}
</ul>

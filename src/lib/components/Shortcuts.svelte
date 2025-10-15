<script lang="ts">
	import { shortcuts } from '$lib/constants';
</script>

<ul class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
	{#each shortcuts as shortcut (shortcut.title)}
		<li class="border">
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a
				href={shortcut.url}
				class="block bg-transparent px-3 py-2 transition-colors hover:bg-gray-900 focus:outline-none"
			>
				{shortcut.title}
			</a>
		</li>
	{/each}
</ul>

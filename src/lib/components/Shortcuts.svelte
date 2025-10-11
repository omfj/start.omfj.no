<script lang="ts">
	import { shortcuts } from '$lib/constants';
</script>

<div class="space-y-4">
	<div class="space-y-2">
		<h1 class="font-mono text-3xl">Shortcuts</h1>
		<p class="text-neutral-300">A list of shortcuts I use on a daily basis.</p>
	</div>

	<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each shortcuts as shortcut (shortcut.title)}
			<li class="border-2">
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					href={shortcut.url}
					class="flex h-full flex-col justify-between gap-2 bg-transparent p-4 transition-colors duration-200 ease-in-out hover:bg-[#9c9c9c] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
				>
					<h1 class="text-xl font-light first-letter:uppercase">{shortcut.title}</h1>
				</a>
			</li>
		{/each}
	</ul>
</div>

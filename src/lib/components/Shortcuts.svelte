<script lang="ts">
	import { shortcuts } from '$lib/constants';
</script>

<div class="space-y-4">
	<div class="space-y-2">
		<h1 class="font-serif text-4xl">Shortcuts</h1>
		<p class="text-neutral-300">A list of shortcuts I use on a daily basis.</p>
	</div>

	<ul class="grid grid-cols-1 gap-5 sm:grid-cols-2">
		{#each shortcuts as shortcut}
			<a href={shortcut.url}>
				<li
					class="group space-y-2 rounded-lg border border-gray-900 p-4 transition-colors duration-200 ease-in-out first-letter:uppercase hover:bg-gray-900"
				>
					<h1 class="text-2xl font-light">{shortcut.title}</h1>
				</li>
			</a>
		{/each}
	</ul>
</div>

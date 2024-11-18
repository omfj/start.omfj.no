<script lang="ts">
	import { cn } from '$lib/cn';
	import { habits } from '$lib/constants';
	import { CompletedHabits } from '$lib/state/completed-habits.svelte';

	const completedHabits = new CompletedHabits();

	let _completedHabits = $state(completedHabits.get());

	const onHabitClick = (habit: string) => {
		const today = new Date().toISOString().split('T')[0];

		if (isCompleted(habit)) {
			completedHabits.remove(habit, today);
		} else {
			completedHabits.add(habit, today);
		}

		_completedHabits = completedHabits.get();
	};

	const isCompleted = (habit: string) => {
		const today = new Date().toISOString().split('T')[0];
		return _completedHabits.some(
			(completedHabit) => completedHabit.habit === habit && completedHabit.date === today
		);
	};
</script>

<div class="space-y-4">
	<div class="space-y-2">
		<h1 class="font-serif text-4xl">Habits</h1>
		<p class="text-neutral-300">
			A list of daily habits I should remember to do throughout the day.
		</p>
	</div>

	<ul class="grid grid-cols-1 gap-5 sm:grid-cols-2">
		{#each habits as habit}
			{@const complete = isCompleted(habit.title)}
			<li>
				<button
					class={cn(
						'group flex w-full flex-col space-y-2 rounded-lg border border-gray-900 p-4 text-left transition-colors duration-200 ease-in-out first-letter:uppercase hover:bg-gray-950 hover:line-through',
						{
							'bg-gray-900 line-through hover:bg-gray-900': complete
						}
					)}
					onclick={() => onHabitClick(habit.title)}
				>
					<h1 class="text-2xl font-light">{habit.title}</h1>
					<p class="text-gray-400">{habit.description}</p>
				</button>
			</li>
		{/each}
	</ul>
</div>

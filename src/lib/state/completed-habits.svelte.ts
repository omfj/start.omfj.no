import { browser } from '$app/environment';

type ICompletedHabits = Array<{
	habit: string;
	date: string;
}>;

const COMPLETED_HABITS_KEY = 'completed-habits';

export class CompletedHabits {
	constructor() {
		this.#removeOldHabits();
	}

	get() {
		return this.#readFromLocalStorage();
	}

	add(habit: string, date: string) {
		const completedHabits = this.get();
		completedHabits.push({ habit, date });
		this.#writeToLocalStorage(completedHabits);
	}

	remove(habit: string, date: string) {
		const newHabits = this.get().filter(
			(completedHabit) => completedHabit.habit !== habit || completedHabit.date !== date
		);
		this.#writeToLocalStorage(newHabits);
	}

	#readFromLocalStorage() {
		if (!browser) return [];

		return JSON.parse(localStorage.getItem(COMPLETED_HABITS_KEY) || '[]') as ICompletedHabits;
	}

	#writeToLocalStorage(completedHabits: ICompletedHabits) {
		if (!browser) return [];
		localStorage.setItem(COMPLETED_HABITS_KEY, JSON.stringify(completedHabits));
	}

	#removeOldHabits() {
		const today = new Date().toISOString().split('T')[0];
		const newHabits = this.get().filter((habit) => habit.date === today);
		this.#writeToLocalStorage(newHabits);
	}
}

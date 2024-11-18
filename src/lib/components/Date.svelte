<script lang="ts">
	import { format, getWeek } from 'date-fns';

	let date = $state(new Date());
	let week = $derived(getWeek(date));

	$effect(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	let time = $derived(format(date, 'HH:mm:ss'));
	let ddate = $derived(format(date, 'MMM dd'));
</script>

<div class="flex flex-col space-y-4">
	<div class="text-center font-mono">
		<p>week: {week}</p>
	</div>

	<div class="flex items-center justify-between font-serif text-4xl">
		<p>{time}</p>
		<p>{ddate}</p>
	</div>
</div>

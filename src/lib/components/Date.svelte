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

<div class="flex flex-col items-center gap-2">
	<div class="font-mono text-5xl font-light tracking-tight">
		{time}
	</div>
	<div class="flex items-center gap-3 font-mono text-base muted">
		<span>{ddate}</span>
		<span class="muted">-</span>
		<span>week {week}</span>
	</div>
</div>

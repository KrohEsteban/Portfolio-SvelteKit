<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	export let stack: string;
	export let progress: number;

	let progressWidth = tweened(0, { duration: 1000, easing: cubicOut });

	function animateProgress(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				progressWidth.set(progress);
			} else {
				progressWidth.set(0); // Resetea la animación al salir de la vista
			}
		});
	}

	onMount(() => {
		const observer = new IntersectionObserver(animateProgress, {
			threshold: 0.5 // La animación se activa cuando el 50% del elemento está en la vista
		});
		const target = document.getElementById(stack);
		if (target) observer.observe(target);
		return () => observer.disconnect();
	});
</script>

<div id={stack} class="pt-1">
	<p class="font-bold">{stack}</p>
	<div class="w-full bg-gris-intermedio border-2 border-gris-intermedio rounded-full h-3">
		<div class="bg-amarillo h-2 rounded-full" style="width: {$progressWidth}%"></div>
	</div>
</div>

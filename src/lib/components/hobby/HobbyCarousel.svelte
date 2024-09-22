<script lang="ts">
	import { onMount } from 'svelte';
	import roller_1 from '$lib/images/roller-1.webp';
	import roller_2 from '$lib/images/roller-2.webp';
	import roller_3 from '$lib/images/roller-3.webp';

	const images = [
		{ src: roller_1, alt: 'Esteban Kroh, saltando en rollers.', text: 'La pasión mueve montañas.' },
		{
			src: roller_2,
			alt: 'Esteban Kroh, clases de roller hockey para adultos.',
			text: 'El compromiso hace al crecimiento.'
		},
		{
			src: roller_3,
			alt: 'Esteban Kroh, clases de rollers para niños.',
			text: 'El futuro, lo creamos nosotros.'
		}
	];
	let current = 0;
	let interval: number;

	function nextImage() {
		current = (current + 1) % images.length;
	}

	onMount(() => {
		interval = setInterval(nextImage, 3000);
		return () => clearInterval(interval);
	});
</script>

<div class="relative max-w-2xl mx-auto overflow-hidden">
	<div class="relative w-full h-0 pb-[70%]">
		{#each images as image, i (image.src)}
			<div
				class={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
			>
				<img src={image.src} alt={image.alt} class="absolute inset-0 w-full h-full object-cover" />
				<div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-end p-16">
					<h2 class="text-2xl font-bold text-white text-center">{image.text}</h2>
				</div>
			</div>
		{/each}
	</div>
</div>

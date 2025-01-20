<script>
	import { onMount } from 'svelte';
	import data from '$lib/data/hobby.json';
	import roller1 from '$lib/images/roller1.webp?enhanced';
	import roller2 from '$lib/images/roller2.webp?enhanced';
	import roller3 from '$lib/images/roller3.webp?enhanced';

	let current = 0;
	let interval;

	const imageMap = {
		roller1: roller1,
		roller2: roller2,
		roller3: roller3
	};

	function nextImage() {
		current = (current + 1) % data.carousel.images.length;
	}

	onMount(() => {
		interval = setInterval(nextImage, 3000);
		return () => clearInterval(interval);
	});
</script>

<h1 class="text-4xl font-bold text-center m-16">{data.title}</h1>

<div class="relative max-w-2xl mx-auto overflow-hidden">
	<div class="relative w-full h-0 pb-[70%]">
		{#each data.carousel.images as image, i (i)}
			<div
				class={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
			>
				<enhanced:img
					src={imageMap[image.src]}
					alt={image.alt}
					class="absolute inset-0 w-full h-full object-cover"
					placeholder="blur"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-end p-16">
					<h2 class="text-2xl font-bold text-white text-center">{image.text}</h2>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="hobby-content">
	{#each data.content as { heading, paragraphs }}
		<section>
			<h2 class="heading">{heading}</h2>
			{#each paragraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</section>
	{/each}
</div>

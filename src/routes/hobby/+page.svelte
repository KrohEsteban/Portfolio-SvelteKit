<script>
    import { onMount } from 'svelte';
    import data from '$lib/data/hobby.json';

    let current = 0;
	let interval;

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

                <img
                    src={image.src}
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

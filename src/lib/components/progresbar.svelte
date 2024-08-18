<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let stack = '';
  export let progress = 0;

  // Store to track if the element is in view
  const inView = writable(false);

  onMount(() => {
    // Si no anda usar npm install svelte-intersection-observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          inView.set(true);
        } else {
          inView.set(false);
        }
      });
    }, {
      threshold: 0
    });

    const element = document.getElementById(stack);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  });
</script>

<style>
  /* Estilos opcionales */
</style>

<div id={stack} class="space-y-4">
  <p class="font-bold text-center text-xl sm:text-2xl lg:text-3xl">{stack}</p>
  {#if $inView}
    <div class="w-full bg-gris-intermedio border-2 border-gris-intermedio rounded-full h-4">
      <div class="bg-amarillo h-3 rounded-full transition-all delay-500 duration-1000" style="width: {progress}%"></div>
    </div>
  {:else}
    <div class="w-full bg-gris-intermedio border-2 border-gris-intermedio rounded-full h-4">
      <div class="bg-amarillo h-3 rounded-full w-[0%]"></div>
    </div>
  {/if}
</div>

<!-- <script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let children;
    let foto = writable(0);
    let ultimo;

    $: if (!children) {
        return null;
    }

    function setFoto(index) {
        foto.set(index);
    }

    function prevFoto() {
        $foto === 0 ? foto.set(ultimo) : foto.update(n => n - 1);
    }

    function nextFoto() {
        $foto === ultimo ? foto.set(0) : foto.update(n => n + 1);
    }

    onMount(() => {
        ultimo = children.length - 1;
    });
</script>

{#if children}
    <div id="default-carousel" class="my-20 relative w-full sm:w-[550px] lg:w-[800px] m-auto" data-carousel="slide">
        <div class="relative overflow-hidden rounded-lg h-full">
            <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={children[$foto].Image.webp.url} alt={children[$foto].Image.Alt}
                    class="object-cover m-auto w-[800px] h-[600px]" />
            </div>
        </div>
        <div class="absolute z-30 flex-row -translate-x-1/2 bottom-5 left-1/2 text-center space-y-2">
            <p class="p-1 text-white text-center text-lg sm:text-xl lg:text-2xl" style="text-shadow:#000 1px 1px;">{children[$foto].titulo}</p>
            <p class="p-1 text-white" style="text-shadow:#000 1px 1px;">{children[$foto].subtitulo}</p>
            <div class="pt-6 space-x-3 flex justify-center">
                {#each children as node, i}
                    <button on:click={() => setFoto(i)} type="button" class="w-3 h-3 rounded-full bg-gris-claro border border-gris-oscuro" aria-current="false" aria-label={"Slide"+i} data-carousel-slide-to={i}></button>
                {/each}
            </div>
        </div>
        <button type="button" on:click={prevFoto} class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" on:click={nextFoto} class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
{/if} -->


<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let children;
    let foto = writable(0);
    let ultimo;

    // Actualización reactiva: Si no hay children, último se setea a null
    $: ultimo = children ? children.length - 1 : null;

    function setFoto(index) {
        foto.set(index);
    }

    function prevFoto() {
        $foto === 0 ? foto.set(ultimo) : foto.update(n => n - 1);
    }

    function nextFoto() {
        $foto === ultimo ? foto.set(0) : foto.update(n => n + 1);
    }

    onMount(() => {
        if (children) {
            ultimo = children.length - 1;
        }
    });
</script>

{#if children && ultimo !== null}
    <div id="default-carousel" class="my-20 relative w-full sm:w-[550px] lg:w-[800px] m-auto" data-carousel="slide">
        <div class="relative overflow-hidden rounded-lg h-full">
            <div class="duration-700 ease-in-out" data-carousel-item>
                <img src={children[$foto].Image.webp.url} alt={children[$foto].Image.Alt}
                    class="object-cover m-auto w-[800px] h-[600px]" />
            </div>
        </div>
        <div class="absolute z-30 flex-row -translate-x-1/2 bottom-5 left-1/2 text-center space-y-2">
            <p class="p-1 text-white text-center text-lg sm:text-xl lg:text-2xl" style="text-shadow:#000 1px 1px;">{children[$foto].titulo}</p>
            <p class="p-1 text-white" style="text-shadow:#000 1px 1px;">{children[$foto].subtitulo}</p>
            <div class="pt-6 space-x-3 flex justify-center">
                {#each children as node, i}
                    <button on:click={() => setFoto(i)} type="button" class="w-3 h-3 rounded-full bg-gris-claro border border-gris-oscuro" aria-current="false" aria-label={"Slide" + i} data-carousel-slide-to={i}></button>
                {/each}
            </div>
        </div>
        <button type="button" on:click={prevFoto} class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" on:click={nextFoto} class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
{/if}

<script lang="ts">
    // import RichTextNormal from '$lib/components/richtextnormal.svelte';
    // import Modal from '$lib/components/modal.svelte';
    // import Carousel from '$lib/components/carousel.svelte';
    // import FotoBaner from '$lib/components/fotobaner.svelte';
    // import Proyectos from '$lib/components/proyectos.svelte';
    // import DosColumnas from '$lib/components/doscolumnas.svelte';
    import type { Pages } from '$lib/types/pages';
    
    export let page: Pages;

   
</script>


{#each page.Contenido as node, i}
    <p> Hola mundo. {node}</p>
{/each}

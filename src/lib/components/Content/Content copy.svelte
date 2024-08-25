<script lang="ts">
    import RichTextNormal from '$lib/components/richtextnormal.svelte';
    import Modal from '$lib/components/modal.svelte';
    import Carousel from '$lib/components/carousel.svelte';
    import FotoBaner from '$lib/components/fotobaner.svelte';
    import Proyectos from '$lib/components/proyectos.svelte';
    import DosColumnas from '$lib/components/doscolumnas.svelte';

    export let children;

    // Si no hay children, no renderizar nada
    if (!children) {
        children = [];
    }
</script>

{#each children as node, i}
    {#if node.blockType === "RichTextNormal"}
        <RichTextNormal key={i}>
            {node.RichTextNormal}
        </RichTextNormal>

    {:else if node.blockType === "Modal"}
        <Modal key={i}>
            {node.Modal}
        </Modal>

    {:else if node.blockType === "Carousel"}
        <Carousel key={i}>
            {node.Carousel}
        </Carousel>

    {:else if node.blockType === "Codigo"}
        <div key={i} innerHTML={node.Codigo} />

    {:else if node.blockType === "FotoBaner"}
        <FotoBaner key={i}>
            {node.Image}
        </FotoBaner>

    {:else if node.blockType === "RelacionProyectos"}
        <Proyectos key={i}>
            {node.ProyectoRelacionado}
        </Proyectos>

    {:else if node.blockType === "DosColumnas"}
        <DosColumnas key={i}>
            {node}
        </DosColumnas>
    {/if}
{/each}

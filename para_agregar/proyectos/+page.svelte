<script context="module" lang="ts">
    export { load } from './+page.server';
  </script>
  
  <script lang="ts">
    import Bloques from '$lib/components/Bloques.svelte';
    import Proyectos from '$lib/components/Proyectos.svelte';
  
    export let data: any;
    export let proyectos: any;
    
    let keywords: string[] = data.PalabrasClaves.map((item: { titulo: string }) => item.titulo);
  
    // Define metadata
    export const metadata = {
      title: data.Title,
      description: data.Description,
      keywords: keywords,
      openGraph: {
        title: data.Title,
        description: data.Description,
        url: 'https://estebankroh.com',
        siteName: 'Esteban Kroh, programador web.',
        images: data.ImageOpenGraph.sizes.thumbnail.url
      }
    };
  </script>
  
  <main>
    <div>
      <Bloques children={data.Contenido} />
    </div>
  
    <div>
      {#each proyectos.docs as item}
        <Proyectos {item} />
      {/each}
    </div>
  </main>
  
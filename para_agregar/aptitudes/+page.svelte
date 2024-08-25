<script context="module" lang="ts">
    export async function load() {
      const getData = async () => {
        const response = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/pages/64679656aa702068d83315cf`);
        return response.json();
      };
  
      const getTecnologias = async () => {
        const response = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/tecnologias?limit=0`);
        return response.json();
      };
  
      const data = await getData();
      const tecnologias = await getTecnologias();
  
      return {
        props: {
          data,
          tecnologias
        }
      };
    }
  
    export function generateMetadata({ data }) {
      const keywords = data?.PalabrasClaves.map((item: { titulo: string }) => item.titulo) || [];
  
      return {
        title: data?.Title,
        description: data?.Description,
        keywords: keywords,
        openGraph: {
          title: data?.Title,
          description: data?.Description,
          url: 'https://estebankroh.com',
          siteName: 'Esteban Kroh, programador web.',
          images: data?.ImageOpenGraph.sizes.thumbnail.url,
        }
      };
    }
  </script>
  
  <script lang="ts">
    export let data: any;
    export let tecnologias: any;
  </script>
  
  <div>
    {#if data}
      {#await data.Contenido}
      <Bloques children={data.Contenido} />
      {/await}
    {/if}
  </div>
  
  <div class="py-20 space-y-6">
    {#each tecnologias.docs as item, i (item.TituloDeSatck)}
      <div key={i} class="space-y-1">
        <Progresbar stack={item.TituloDeSatck} progress={item.Progreso} />
      </div>
    {/each}
  </div>
  
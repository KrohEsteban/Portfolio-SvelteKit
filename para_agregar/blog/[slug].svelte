<script context="module" >
    export async function load({ params }) {
      const slug = params.slug;
  
      const getData = async (slug: string) => {
        const response = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/blog?where[Slug][equals]=${slug}`);
        const data = await response.json();
        return data.docs[0];
      };
  
      const getContactos = async () => {
        const response = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/contactos?limit=0`);
        const data = await response.json();
        return data.docs;
      };
  
      const data = await getData(slug);
      const contactos = await getContactos();
  
      return {
        props: {
          data,
          contactos
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
  
  <script>
    export let data: any;
    export let contactos: any;
  </script>
  
  <div>
    {#if data}
      {#await data.Contenido}
        <div>
          <!-- Aquí asume que Bloques es un componente que puedes usar directamente -->
          <Bloques children={data.Contenido} />
        </div>
      {/await}
    {/if}
  </div>
  
  <div class="text-center pt-40 pb-5">
    <p>
      <span class="text-amarillo">---</span> Post actualizado el {data?.updatedAt.slice(8, 10)}/{data?.updatedAt.slice(5, 7)}/{data?.updatedAt.slice(2, 4)}
      <span class="text-amarillo">---</span>
    </p>
  </div>
  
  <div>
    <ul class="flex justify-center space-x-6 md:flex-col-reverse md:space-x-0 md:fixed md:top-20 md:right-5">
      {#each contactos as item}
        <li class="w-8 sm:w-9 md:w-10" key={item.Nombre}>
          <a class="stroke-none text-amarillo p-4 m-auto" href={item.Url} target="_blank" rel="noopener noreferrer">
            {@html item.Svg}
            <p class="hidden">{item.Nombre}</p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
  
  
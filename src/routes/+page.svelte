<script lang="ts">
  import Content from '$lib/components/content/Content.svelte';
  import type { PageData } from './$types';
  import SvgEstebanKroh from '$lib/components/SvgEstebanKroh.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
  import perfil from '$lib/images/perfil.webp';

  export let data: PageData;
  
// Convertir data a una promesa en caso de que ya no lo sea
//let dataPromise = new Promise<PageData>((resolve) => resolve(data));
  const dataPromise = Promise.resolve(data)
</script>

<style>
  .image {
    animation: opacity-animation 4s ease-in-out;
  }

  @keyframes opacity-animation {
    from { opacity: 0;}
    to { opacity: 1;}
  }
</style>

{#await dataPromise}
  <Spinner />
{:then data}
<div class='min-h-[90vh] border-b p-2 pt-5 border-solid border-gris-claro mb-10 font-DancingScript w-full'>

  <!-- Imagen de perfil -->
  <div class="m-auto w-64 h-96">
    <img 
      src={perfil} 
      alt="Esteban Kroh, developer, foto de perfil."
      class="image rounded-[50%] delay-150"
    />
  </div>
  
  <!-- Nombre animado -->
  <SvgEstebanKroh/>

  <!-- Información adicional -->
  <div class="m-auto w-full space-y-8">
    <h2>Programador web</h2>
    <h3>Contacto:</h3>
    <ul class="flex justify-center space-x-6">
      {#each data.contact.docs as item}
        <li class="w-10 sm:w-11 md:w-12">
          <a 
            class="stroke-none text-gris-claro p-4 m-auto" 
            href={item.Url} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={item.Nombre}
          >
            {@html item.Svg}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>  

<div>
  <Content page={data.index} />
</div>
{:catch error}
  <p>Error loading data: {error.message}</p>
{/await}

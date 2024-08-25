
<!-- 
<script>
  import SvgEstebanKroh from '$lib/components/SvgEstebanKroh.svelte';
  import profile from '$lib/images/perfil.webp';
  import contact from '$lib/data/contact.json';
</script>

<div class="min-h-[90vh] border-b p-2 pt-5 border-solid border-gris-claro mb-10 font-dancing_script">
  <img
    src={profile}
    alt="Esteban Kroh, programador web, foto de perfil."
    class="object-cover  rounded-[50%] animation_opacity m-auto"
    width=300
    height=300
  />

  <h1 class="text-amarillo" aria-label="Esteban Kroh">
    <SvgEstebanKroh />
  </h1>

  <div class="m-auto w-full space-y-8">
    <h2>Programador web</h2>
    <h3>Contacto:</h3>
    <ul class="flex justify-center space-x-6">
      {#each contact.docs as item}
        <li class="w-10 sm:w-11 md:w-12" key={item.Nombre}>
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
</div> -->



<!-- <script lang="ts">
  export let data: any;
  export let contactos: any;
  import Perfil from '$lib/components/Perfil.svelte';
  import Bloques from '$lib/components/Bloques.svelte';
</script>

<div class=''>
  <div class='min-h-[90vh] border-b p-2 pt-5 border-solid border-gris-claro mb-10 font-dancingscript '>
    <Perfil {contactos} />
  </div>
  
  <div>
    <Bloques children={data.Contenido} />
  </div>
</div> -->






<script lang="ts">
  import SvgEstebanKroh from '$lib/components/SvgEstebanKroh.svelte';
  import profile from '$lib/images/perfil.webp';
  import Content from '$lib/components/Content/Content.svelte';

  export let data: any;
  export let contactos: any;

  // Función para evitar el uso de `dangerouslySetInnerHTML`
  function getSvgHtml(svg) {
    return { __html: svg };
  }
</script>

<style>
  .image {
    object-fit: cover;
    width: auto;
    height: auto;
    border-radius: 50%;
    animation: opacity-animation 1s ease-in-out;
  }

  @keyframes opacity-animation {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>

<div class='min-h-[90vh] border-b p-2 pt-5 border-solid border-gris-claro mb-10 font-dancing_script'>
  <!-- Imagen de perfil -->
  <img 
    src={profile} 
    alt="Esteban Kroh, programador web, foto de perfil."
    class="image"
    width="200"
    height="200"
  />

  <!-- Nombre -->
  <h1 class="text-amarillo" aria-label="Esteban Kroh">
    <SvgEstebanKroh />
  </h1>

  <!-- Información adicional -->
  <div class="m-auto w-full space-y-8">
    <h2>Programador web</h2>
    <h3>Contacto:</h3>
    <ul class="flex justify-center space-x-6">
      {#each contactos.children.docs as item}
        <!-- <li class="w-10 sm:w-11 md:w-12" key={item.Nombre}>
          <a 
            class="stroke-none text-gris-claro p-4 m-auto" 
            href={item.Url} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={item.Nombre}
            use:html={getSvgHtml(item.Svg)}
          />
        </li> -->
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
  <Content children={data.Contenido} />
</div>

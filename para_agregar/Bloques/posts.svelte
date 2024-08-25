<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation';

  export let etiquetas;
  export let blogs;

  const select = writable('');
  let nopost = 0;

  function handleButtonClick(title) {
    select.set(title);
  }

  function handleAllClick() {
    select.set('');
  }

  function navigateToBlog(slug) {
    goto(`/blog/${slug}`);
  }

  // Calcula el número de publicaciones filtradas
  $: filteredBlogs = blogs.docs.filter(item => {
    if ($select === '') return true;
    return item.etiquetas?.some(tag => tag.Titulo === $select);
  });

  $: nopost = blogs.docs.length - filteredBlogs.length;
</script>

<style>
  /* Agrega tus estilos aquí si es necesario */
</style>

<div class="my-20">
  <p class="text-start text-lg sm:text-xl lg:text-2xl p-3">Explora las categorías:</p>
  <div class="flex flex-wrap">
    <button on:click={handleAllClick} class="p-5 m-3 rounded-lg shadow-sm border border-gris-claro bg-gris-intermedio hover:bg-gris-oscuro text-gris-claro">Todos</button>
    {#each etiquetas.docs as item (item.Titulo)}
      <button on:click={() => handleButtonClick(item.Titulo)} class="p-5 m-3 rounded-lg shadow-sm border border-gris-claro bg-gris-intermedio hover:bg-gris-oscuro text-gris-claro">
        {item.Titulo}
      </button>
    {/each}
  </div>
</div>

<div class="my-20">
  <p class="text-start text-lg sm:text-xl lg:text-2xl p-3">Posts:</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 py-5">
    {#each filteredBlogs as item (item.Slug)}
      <div on:click={() => navigateToBlog(item.Slug)} class="space-y-3 p-5 m-3 shadow-[-10px_-10px_10px_-10px] shadow-amarillo text-gris-claro cursor-pointer">
        <p class="text-start text-lg sm:text-xl lg:text-2xl p-2">{item.Title}</p>
        <p class="text-start p-2">{item.Description}</p>
      </div>
    {/each}
    {#if nopost === blogs.docs.length}
      <div class="space-y-3 p-5 m-3 shadow-[-10px_-10px_10px_-10px] shadow-amarillo text-gris-claro">
        <p class="text-start text-lg sm:text-xl lg:text-2xl p-2">No se encontraron post con esta etiqueta</p>
      </div>
    {/if}
  </div>
</div>

<!-- src/routes/[your-page]/+page.svelte -->
<script>
    export let data: any;
    export let etiquetas: any;
    export let blogs: any;
  </script>
  
  <div>
    {#if data.Contenido}
      {@html Bloques(data.Contenido)}
    {/if}
  </div>
  
  <Post {etiquetas} {blogs} />
  
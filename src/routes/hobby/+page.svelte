<!-- src/routes/[your-page]/+page.svelte -->
<script context="module" lang="ts">
    export { load } from './+page.server';
  </script>
  
  <script lang="ts">
    export let data: any; // Usa un tipo adecuado en lugar de `any`
  </script>
  
  <div>
    {#if data.Contenido}
      {@html data.Contenido.map((bloque: any) => Bloques(bloque)).join('')}
    {/if}
  </div>
  
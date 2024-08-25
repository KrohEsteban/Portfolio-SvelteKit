<script>
    import Svgestebankroh from './Svgestebankroh.svelte';
    import profile from '../public/perfil.webp'; // Ajusta la ruta según tu estructura de proyecto
  
    export let contactos;
  
    // Función para evitar el uso de `dangerouslySetInnerHTML`
    function getSvgHtml(svg) {
      return { __html: svg };
    }
  </script>
  
  <style>
    /* Asegúrate de agregar el CSS correspondiente aquí */
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
  
  <div>
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
      <Svgestebankroh />
    </h1>
  
    <!-- Información adicional -->
    <div class="m-auto w-full space-y-8">
      <h2>Programador web</h2>
      <h3>Contacto:</h3>
      <ul class="flex justify-center space-x-6">
        {#each contactos.children.docs as item}
          <li class="w-10 sm:w-11 md:w-12" key={item.Nombre}>
            <a 
              class="stroke-none text-gris-claro p-4 m-auto" 
              href={item.Url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={item.Nombre}
              use:html={getSvgHtml(item.Svg)}
            />
          </li>
        {/each}
      </ul>
    </div>
  </div>
  
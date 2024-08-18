<script>
  export let children;
</script>

<div class="grid grid-cols-7 gap-4 py-20">
  <div class="text-center col-span-7 md:col-span-3">
    <p class="text-center text-xl sm:text-2xl lg:text-3xl">
      <a href={`/blog/${children.Post.Slug}`} class="">
        {children.TituloProyect}
      </a>
    </p>
    <p class="text-center text-lg sm:text-xl lg:text-2xl">{children.Stack}</p>
    <p>{children.TextoCortoDelProyecto}</p>
  </div>

  <img
    src={children.ImagenDescktop.webp.url}
    alt={children.ImagenDescktop.Alt}
    width="300"
    height="150"
    class="border-4 border-black shadow-lg m-auto col-span-7 md:col-span-3"
  />

  <img
    src={children.ImagenCelu.webp.url}
    alt={children.ImagenCelu.Alt}
    width="100"
    height="200"
    class="border-4 border-black shadow-lg m-auto col-span-7 md:col-span-1"
  />
</div>

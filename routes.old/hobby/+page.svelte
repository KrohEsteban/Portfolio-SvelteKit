<script>
	import HobbyCarousel from '$lib/components/hobby/HobbyCarousel.svelte';
	import HobbyText from '$lib/components/hobby/HobbyText.svelte';

  export const metadata = {
    title: "Hobby - Roller Hockey y Enseñanza",
    description: "Descubre mi pasión por el roller hockey y mi experiencia como profesor y dirigente deportivo.",
    keywords: "roller hockey, hobby, deportes, enseñanza, equipo de roller",
  };
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="keywords" content={metadata.keywords} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:image" content="https://tusitio.com/ruta/a/imagen.jpg" />
  <meta property="og:url" content="https://tusitio.com/hobby" />
  <link rel="canonical" href="https://tusitio.com/hobby" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SportsTeam",
      "name": "Equipo de Roller Hockey",
      "member": {
        "@type": "Person",
        "name": "Tu Nombre",
        "jobTitle": "Profesor y Dirigente",
        "url": "https://tusitio.com/hobby"
      }
    })}
  </script>
</svelte:head>


<h1 class="text-4xl font-bold text-center m-16">Profe, organizador y dirigente</h1>

<HobbyCarousel />

<HobbyText />

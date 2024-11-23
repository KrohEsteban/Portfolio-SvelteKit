<script>
	import LeftColumn from '$lib/components/curriculum/LeftColumn.svelte';
	import RightColumn from '$lib/components/curriculum/RightColumn.svelte';

  export const metadata = {
    title: "Currículum de [Tu Nombre] - Desarrollador Web",
    description: "Consulta el currículum de [Tu Nombre], un desarrollador web con experiencia en SvelteKit, PHP y más.",
    keywords: "currículum, desarrollador web, SvelteKit, PHP, experiencia laboral, habilidades",
  };
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="keywords" content={metadata.keywords} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:image" content="https://tusitio.com/ruta/a/imagen.jpg" />
  <meta property="og:url" content="https://tusitio.com/curriculum" />
  <link rel="canonical" href="https://tusitio.com/curriculum" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "[Tu Nombre]",
      "jobTitle": "Desarrollador Web",
      "url": "https://tusitio.com/curriculum",
      "sameAs": [
        "https://linkedin.com/in/tu_usuario",
        "https://github.com/tu_usuario"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Nombre de la Universidad"
      },
      "workLocation": {
        "@type": "Place",
        "name": "Nubity"
      }
    })}
  </script>
</svelte:head>

<main class="min-h-screen p-4 font-sans pt-20">
	<div class="max-w-6xl mx-auto rounded-b-3xl overflow-hidden">
		<div class="flex flex-col md:flex-row">
			<div class="w-full md:w-1/3 text-gris-claro relative">
				<div class="relative hidden md:block w-full h-20 bg-gris-intermedio overflow-hidden">
					<div class="absolute -top-0 left-0 w-24 h-20 bg-gris-oscuro"></div>
					<div class="absolute -top-0 left-4 w-20 h-20 bg-gris-intermedio rounded-tl-full"></div>
				</div>
				<div
					class="relative p-4 md:pt-0 rounded-br-3xl rounded-tl-3xl md:rounded-tl-none bg-gris-intermedio"
				>
					<div
						class="hidden md:block absolute top-0 -left-52 w-56 h-56 bg-gris-oscuro rounded-br-full"
					></div>
					<LeftColumn />
				</div>
			</div>
			<div class="w-full md:w-2/3">
				<div class="relative hidden md:block w-full h-20 bg-gris-intermedio overflow-hidden">
					<div class="absolute bottom-0 left-0 w-10 h-10 bg-gris-oscuro rounded-tl-full"></div>
					<div class="absolute bottom-0 left-10 w-full h-10 bg-gris-oscuro"></div>
				</div>
				<RightColumn />
			</div>
		</div>
	</div>
</main>

<script>
	import ProfileImage from '$lib/components/home/ProfileImage.svelte';
	import DeveloperIntro from '$lib/components/home/DeveloperIntro.svelte';
	import ContactInfo from '$lib/components/home/ContactInfo.svelte';
	import CallToAction from '$lib/components/home/CallToAction.svelte';
	import Quotation from '$lib/components/home/Quotation.svelte';
	import InfoBox from '$lib/components/home/InfoBox.svelte';

  export const metadata = {
    title: "Desarrollador Web | SvelteKit, PHP y Docker",
    description: "Soy un desarrollador web especializado en SvelteKit y PHP. Aquí encontrarás mi currículum, proyectos y más.",
    keywords: "desarrollador web, SvelteKit, PHP, Docker, currículum, proyectos",
  };
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="keywords" content={metadata.keywords} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:image" content="https://tusitio.com/ruta/a/tu/imagen.jpg" />
  <meta property="og:url" content="https://tusitio.com" />
  <link rel="canonical" href="https://tusitio.com/" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Tu Nombre",
      "jobTitle": "Desarrollador Web",
      "url": "https://tusitio.com",
      "sameAs": [
        "https://twitter.com/tu_usuario",
        "https://linkedin.com/in/tu_usuario"
      ]
    })}
  </script>
</svelte:head>

<div class="min-h-[85vh] pt-5 mb-10 font-DancingScript w-full">
	<ProfileImage />
	<DeveloperIntro />
	<ContactInfo />
</div>

<div class="border-b m-2 border-solid border-gris-claro" />
<CallToAction />
<Quotation />
<InfoBox />

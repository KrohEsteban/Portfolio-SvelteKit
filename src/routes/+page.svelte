<script>
	import ImgPerfil from '$lib/images/perfil.webp?enhanced';
	import SvgEstebanKroh from '$lib/components/SvgEstebanKroh.svelte';
	import Destello from '$lib/components/Destello.svelte';
	import home from '$lib/data/home.json';

	export const metadata = home.metadata;
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
</svelte:head>

<div class="min-h-[85vh] pt-5 mb-10 w-full">
	<div class="m-auto">
		<enhanced:img
			src={ImgPerfil}
			alt="Esteban Kroh, developer, foto de perfil."
			class="image rounded-[50%] delay-150 w-36 sm:w-48 md:w-60 h-auto m-auto"
		/>
	</div>
	<SvgEstebanKroh />
	<div class="m-auto w-full space-y-10 font-KaushanScript">
		<h2>{home.profession.title}</h2>
	</div>
	<div class="m-auto w-full space-y-6 font-KaushanScript">
		<h3>Contacto:</h3>
		<ul class="flex justify-center space-x-6">
			{#each home.contact as item}
				<li class="w-10 sm:w-11 md:w-12">
					<a
						class="stroke-none text-gris-claro m-auto"
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={item.nombre}
					>
						{@html item.svg}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="border-b m-2 p-10 border-solid border-gris-claro"></div>
	<div class="m-auto w-full p-6">
		<h3>{home.text.title}</h3>
		{#each home.text.paragraphs as paragraph}
			<p class="p-2">{paragraph}</p>
		{/each}
	</div>
</div>
<Destello sections={home.flash.sections} />
<h4 class="py-20 px-10 m-auto text-center font-KaushanScript">
	"{home.quote.text}"
</h4>

<style>
	.image {
		animation: opacity-animation 4s ease-in-out;
	}

	@keyframes opacity-animation {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

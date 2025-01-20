<script module>
	import LeftColumn from './LeftColumn.svelte';
	import RightColumn from './RightColumn.svelte';
	import data from '$lib/data/curriculum/metadata.json';

</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.keywords} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:image" content="https://tusitio.com/ruta/a/imagen.jpg" />
	<meta property="og:url" content="https://tusitio.com/curriculum" />
	<link rel="canonical" href="https://tusitio.com/curriculum" />
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
					<LeftColumn data={data} />
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

<script>
	import '../app.css';
	import DancingScript from '$lib/font/DancingScript.ttf';
	import OpenSans from '$lib/font/OpenSans.ttf';
	import KaushanScript from '$lib/font/KaushanScript.ttf';
	import Navigation from '$lib/components/Navigation.svelte';
	import FooterEsteban from '$lib/components/FooterEsteban.svelte';
</script>

<svelte:head>
	<title>Esteban Kroh, programador web.</title>
	<meta name="theme-color" content="#ffd700">
	<meta name="referrer" content="origin-when-cross-origin">
	<link rel="icon" href="/favicon.svg">
	<link rel="apple-touch-icon" href="/favicon.svg">
	<link rel="manifest" href="/manifest.json">
</svelte:head>

<html lang="es" class="font-open_sans" style="--font-DancingScript: url({DancingScript}); --font-OpenSans: url({OpenSans}); --font-KaushanScript: url({KaushanScript});">
<body class="font-open_sans bg-gris-oscuro text-gris-claro">
	<Navigation />
	<main class="w-11/12 sm:w-5/6 max-w-4xl m-auto flex-row">
	<slot />
	</main>
	<FooterEsteban />
</body>
</html>

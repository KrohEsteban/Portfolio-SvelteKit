<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import FooterEsteban from '$lib/components/FooterEsteban.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Esteban Kroh, developer.</title>
	<meta name="theme-color" content="#ffd700">
	<meta name="referrer" content="origin-when-cross-origin">
	<link rel="icon" href="/favicon.svg">
	<link rel="apple-touch-icon" href="/favicon.svg">
	<link rel="manifest" href="/manifest.json">
</svelte:head>

<html lang="es" class="font-OpenSans">
<body class="font-OpenSans bg-gris-oscuro text-gris-claro">
	<Navigation contact={data.contact}/>
	<main class="w-11/12 sm:w-5/6 max-w-4xl m-auto flex-row">
	<slot />
	</main>
	<FooterEsteban />
</body>
</html>

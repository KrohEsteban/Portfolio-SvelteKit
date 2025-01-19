<script>
	import '../app.css';
	import Navigation from './Navigation.svelte';
	import FooterEsteban from './FooterEsteban.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Esteban Kroh, developer.</title>
	<meta name="theme-color" content="#ffd700" />
	<meta name="referrer" content="origin-when-cross-origin" />
	<link rel="icon" href="/favicon.svg" />
	<link rel="apple-touch-icon" href="/favicon.svg" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<Navigation />
<main class="w-11/12 sm:w-5/6 max-w-4xl m-auto flex-row min-h-[85vh] text-justify">
	{@render children()}
</main>
<FooterEsteban />

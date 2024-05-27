<script>
	import '../app.css';
</script>

<svelte:body class="font-opensans bg-gris-oscuro text-gris-claro" />
<div class="font-opensans bg-gris-oscuro text-gris-claro">
	<!-- <Navigation contactos={contactos} />  -->
	<main class="w-11/12 sm:w-5/6 max-w-4xl m-auto flex-row">
		<slot />
	</main>
	<!-- <FooterEsteban /> -->
</div>

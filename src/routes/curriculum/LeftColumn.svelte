<script>
	import SvgEstebanKroh from '$lib/components/SvgEstebanKroh.svelte';
	import ImgPerfil from '$lib/images/perfil.webp';
	import Progressbar from '$lib/components/Progressbar.svelte';
	import contactos from './data/contactos.json';
	import habilidades from './data/habilidades.json';
</script>

<div class="block md:hidden p-6">
	<SvgEstebanKroh />
	<h2 class="font-KaushanScript">Web Developer</h2>
</div>
<div class="relative w-32 h-32 mx-auto">
	<img
		src={ImgPerfil}
		alt="Esteban Kroh"
		class="rounded-full w-full h-full object-cover border-4 border-amarillo"
	/>
	<div
		class="absolute inset-0 rounded-full border-4 border-amarillo border-l-transparent transform -rotate-45"
	></div>
</div>

<div class="mb-6">
	<h3 class="text-xl font-bold p-3">
		<span class="block text-amarillo">¿Buscas programador?</span> ¡Contáctame!
	</h3>
	<p class="text-sm leading-relaxed">
		Soy Esteban Kroh, developer de Santa Rosa, La Pampa, apasionado por la informática y el
		emprendimiento. 💻
	</p>
</div>

<h3 class="text-xl font-semibold mt-6 mb-2">Habilidades Técnicas</h3>
<ul class="space-y-2 text-sm text-gris-claro">
	{#each habilidades as habilidad}
		<li><Progressbar stack={habilidad.stack} progress={habilidad.progress} /></li>
	{/each}
</ul>

<h3 class="text-xl font-semibold mb-2 mt-8">Contactos:</h3>
<ul class="space-y-2 text-sm">
	{#each contactos as contacto}
		<li>
			{contacto.label}:<br />
			<a href={contacto.link} class="text-amarillo hover:underline">{contacto.value}</a>
		</li>
	{/each}
</ul>

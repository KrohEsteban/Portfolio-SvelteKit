<script>
	import experiencias from '$lib/data/curriculum/experiencias.json';
	import SvgEstebanKroh from '$lib/components/SvgEstebanKroh.svelte';
</script>

<div class="m-2 md:m-6">
	<div class="hidden md:block">
		<SvgEstebanKroh />
		<h2 class="font-KaushanScript">Web Developer</h2>
	</div>
	<h3 class="text-xl font-semibold md:p-0">Experiencias:</h3>
	<div class="space-y-2">
		{#each experiencias as exp}
			<div class="p-2 rounded-lg shadow-lg bg-gris-oscuro">
				<h4 class="text-lg font-bold text-amarillo pb-2">
					{exp.empresa} <span class="text-gris-claro">({exp.periodo})</span>
				</h4>
				<p class="italic mb-2 text-sm">{exp.tecnologias}</p>
				{#if Array.isArray(exp.descripcion)}
					{#each exp.descripcion as proyecto}
						<div class="mb-4">
							<h4 class="text-base font-semibold text-gris-claro p-0">
								{proyecto.proyecto} <span class="text-sm">({proyecto.periodo})</span>
							</h4>
							<p class="text-sm">{proyecto.descripcion}</p>
						</div>
					{/each}
				{:else}
					<p class="text-sm">{exp.descripcion}</p>
				{/if}
			</div>
		{/each}
	</div>
</div>

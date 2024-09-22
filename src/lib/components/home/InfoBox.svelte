<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const isVisible = writable(false);

	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => {
			isVisible.set(entry.isIntersecting);
		});

		const target = document.querySelector('#div-brillo');
		if (target) observer.observe(target);

		return () => observer.disconnect();
	});
</script>

<div
	id="div-brillo"
	class="w-11/12 border p-4 border-gris-claro bg-gris-intermedio text-center m-auto"
	class:brillo={$isVisible}
>
	<p>¿Sos emprendedor y querés una página para tu negocio?</p>
	<p>
		<a href="/blog">Acá tenés info!</a>
	</p>
	<p>¿Sos parte de una empresa y buscás colaboradores?</p>
	<p>
		<a href="/aptitudes">Acá tenés info sobre mis aptitudes!</a>
	</p>
</div>

<style>
	.brillo {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
</style>

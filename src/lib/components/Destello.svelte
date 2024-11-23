<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let sections = []; // Array de secciones con texto y enlaces

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
	{#each sections as section}
		<p>{section.text}</p>
		{#if section.link}
			<p>
				<a href={section.link.url}>{section.link.text}</a>
			</p>
		{/if}
	{/each}
</div>

<style>
	.brillo {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
</style>

<script lang="ts">
	import ImgPerfil from '$lib/images/perfil.webp';
</script>

<div class="m-auto">
	<img
		src={ImgPerfil}
		alt="Esteban Kroh, developer, foto de perfil."
		class="image rounded-[50%] delay-150 w-36 sm:w-48 md:w-60 h-auto m-auto"
	/>
</div>

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

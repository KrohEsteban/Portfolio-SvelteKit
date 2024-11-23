<script>
	import { page } from '$app/stores';
</script>

<div class="error-container">
	<h1 class="p-6">Error {$page.status}</h1>
	<p class="p-6">{$page.error?.message}</p>
</div>

<style>
	.error-container {
		text-align: center;
		padding: 2rem;
		/* height: 80vh; */
	}
</style>

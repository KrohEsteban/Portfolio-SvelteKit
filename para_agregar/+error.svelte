<!-- <script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<span style="font-size: 10em">
	holaaa
</span> -->
<script>
    import { page } from '$app/stores';
</script>

<style>
    .error-container {
      text-align: center;
      padding: 2rem;
      height: 80vh;
    }
</style>
  
<div class="error-container">
    <h1 class='p-6'>Error {$page.status}</h1>
    <p class='p-6'>{$page.error?.message}</p>
    <a href="/">Volver a la página principal</a>
</div>

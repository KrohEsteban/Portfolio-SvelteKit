<script>
    export let size = "30px"; // Tamaño del spinner, por defecto 50px
</script>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80vh;
    }

    .spinner {
        left: -15px;
        border: 5px solid #fbbf24; /* Color de fondo */
        border-top: 5px solid #3A3F44; /* Color del spinner */
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
<div class="container">
    <div class="spinner" style="--size: {size};"></div> 
</div>
  
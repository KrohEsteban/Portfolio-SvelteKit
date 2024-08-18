<script>
  import { onMount } from 'svelte';
  import RichTextModal from './richtextmodal.svelte';

  export let children;

  let inView = false;

  function handleIntersection(entries) {
    entries.forEach(entry => {
      inView = entry.isIntersecting;
    });
  }

  onMount(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });
    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  });

  let ref;
</script>

<div class="py-6">
  <div bind:this={ref} class={`w-11/12 border p-4 border-gris-claro bg-gris-intermedio text-center ${inView ? 'brillo' : 'sinbrillo'}`}>
    <RichTextModal>
      {children}
    </RichTextModal>
  </div>
</div>

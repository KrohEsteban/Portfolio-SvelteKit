<!-- <script>
  import escapeHTML from 'escape-html';
  export let children;

  let style = '';

  // Asignación de estilos según las propiedades del texto
  if (children.blod) {
    style += ' font-bold';
  }

  if (children.italic) {
    style += ' italic';
  }

  if (children.underline) {
    style += ' underline';
  }

  if (children.strikethrough) {
    style += ' line-through';
  }
</script>

{#if children.code}
  <span class={style}>
    <code class="px-2" innerHTML={escapeHTML(children.text)} />
  </span>
{:else}
  <span class={style}>
    <span innerHTML={escapeHTML(children.text)} />
  </span>
{/if} -->

<script lang="ts">
  export let node: any;

  let style = '';

  // Asignación de estilos según las propiedades del texto
  if (node.blod) {
    style += ' font-bold';
  }

  if (node.italic) {
    style += ' italic';
  }

  if (node.underline) {
    style += ' underline';
  }

  if (node.strikethrough) {
    style += ' line-through';
  }
</script>

{#if node.code}
  <span class={style}>
    <code class="px-2">
      {@html node.text}
    </code>
  </span>
{:else}
  <span class={style}>
    {@html node.text}
  </span>
{/if}

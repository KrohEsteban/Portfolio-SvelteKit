<!-- <script>
  import Serializar from './serializar.svelte';
  import { Link } from '@sveltejs/kit';

  export let children = [];

  // Devuelve null si no hay children
  if (!children) {
    return;
  }

  function renderNode(node, i) {
    if (!node) return null;

    // Si el nodo tiene solo texto
    if (typeof node.text !== 'undefined') {
      return (
        <Serializar key={i}>
          {node}
        </Serializar>
      );
    }

    // Renderiza según el tipo de nodo
    switch (node.type) {
      case 'h1':
        return <h1 key={i} class="p-3">{renderChildren(node.children)}</h1>;
      case 'h2':
        return <h2 key={i} class="p-3">{renderChildren(node.children)}</h2>;
      case 'h3':
        return <h3 key={i} class="p-3">{renderChildren(node.children)}</h3>;
      case 'h4':
        return <h4 key={i} class="p-3">{renderChildren(node.children)}</h4>;
      case 'h5':
        return <h5 key={i} class="p-3">{renderChildren(node.children)}</h5>;
      case 'h6':
        return <h6 key={i} class="p-3">{renderChildren(node.children)}</h6>;
      case 'blockquote':
        return <blockquote key={i} class="p-5 m-auto text-center font-kaushanscript">{renderChildren(node.children)}</blockquote>;
      case 'link':
        return renderLink(node, i);
      case 'ol':
        return <ol key={i} class="list-decimal pl-8 py-5">{renderChildren(node.children)}</ol>;
      case 'ul':
        return <ul key={i} class="list-disc pl-8 py-5">{renderChildren(node.children)}</ul>;
      case 'li':
        return <li key={i}>{renderChildren(node.children)}</li>;
      default:
        return <p key={i}>{renderChildren(node.children)}</p>;
    }
  }

  function renderChildren(children) {
    return children.map((node, i) => renderNode(node, i));
  }

  function renderLink(node, i) {
    const isInternal = node.linkType === 'internal';
    const href = isInternal
      ? node.doc?.value?.Slug || node.doc?.value?.Url || '#'
      : node.url || '#';

    return (
      <Link key={i} href={href} target={isInternal ? undefined : "_blank"} rel={isInternal ? undefined : "noopener noreferrer"}>
        {renderChildren(node.children)}
      </Link>
    );
  }
</script>

{#if children.length > 0}
  {@html renderChildren(children)}
{/if} -->

<script>
  import Serializar from './serializar.svelte';
  import { Link } from '@sveltejs/kit';

  export let children = [];

  // Si no hay children, no se hace nada
  let nodes = [];
  $: if (children && children.length > 0) {
    nodes = renderChildren(children);
  }

  function renderNode(node, i) {
    if (!node) return null;

    // Si el nodo tiene solo texto
    if (typeof node.text !== 'undefined') {
      return (
        <Serializar children={node} />
      );
    }

    // Renderiza según el tipo de nodo
    switch (node.type) {
      case 'h1':
        return <h1 class="p-3">{renderChildren(node.children)}</h1>;
      case 'h2':
        return <h2 class="p-3">{renderChildren(node.children)}</h2>;
      case 'h3':
        return <h3 class="p-3">{renderChildren(node.children)}</h3>;
      case 'h4':
        return <h4 class="p-3">{renderChildren(node.children)}</h4>;
      case 'h5':
        return <h5 class="p-3">{renderChildren(node.children)}</h5>;
      case 'h6':
        return <h6 class="p-3">{renderChildren(node.children)}</h6>;
      case 'blockquote':
        return <blockquote class="p-5 m-auto text-center font-kaushanscript">{renderChildren(node.children)}</blockquote>;
      case 'link':
        return renderLink(node, i);
      case 'ol':
        return <ol class="list-decimal pl-8 py-5">{renderChildren(node.children)}</ol>;
      case 'ul':
        return <ul class="list-disc pl-8 py-5">{renderChildren(node.children)}</ul>;
      case 'li':
        return <li>{renderChildren(node.children)}</li>;
      default:
        return <p>{renderChildren(node.children)}</p>;
    }
  }

  function renderChildren(children) {
    return children.map((node, i) => renderNode(node, i));
  }

  function renderLink(node, i) {
    const isInternal = node.linkType === 'internal';
    const href = isInternal
      ? node.doc?.value?.Slug || node.doc?.value?.Url || '#'
      : node.url || '#';

    return (
      <Link href={href} target={isInternal ? undefined : "_blank"} rel={isInternal ? undefined : "noopener noreferrer"}>
        {renderChildren(node.children)}
      </Link>
    );
  }
</script>

{#if nodes.length > 0}
  {@html nodes.join('')}
{/if}

<!-- <script>
  import Serializar from './serializar.svelte';
  import { Link } from '@sveltejs/kit';
  import Image from 'svelte-image';

  export let children = [];

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
        return <h1 key={i} class="py-20">{renderChildren(node.children)}</h1>;
      case 'h2':
        return <h2 key={i} class="py-20">{renderChildren(node.children)}</h2>;
      case 'h3':
        return <h3 key={i} class="py-20">{renderChildren(node.children)}</h3>;
      case 'h4':
        return <h4 key={i} class="py-20">{renderChildren(node.children)}</h4>;
      case 'h5':
        return <h5 key={i} class="py-20">{renderChildren(node.children)}</h5>;
      case 'h6':
        return <h6 key={i} class="py-20">{renderChildren(node.children)}</h6>;
      case 'blockquote':
        return <blockquote key={i} class="py-20 px-10 m-auto text-center font-kaushanscript">{renderChildren(node.children)}</blockquote>;
      case 'link':
        return renderLink(node, i);
      case 'indent':
        return <div key={i} class="py-10 px-3 ms:p-10">{renderChildren(node.children)}</div>;
      case 'ol':
        return <ol key={i} class="list-decimal pl-8 py-5">{renderChildren(node.children)}</ol>;
      case 'ul':
        return <ul key={i} class="list-disc pl-8 py-5">{renderChildren(node.children)}</ul>;
      case 'li':
        return <li key={i}>{renderChildren(node.children)}</li>;
      case 'upload':
        return renderUpload(node, i);
      default:
        return <p key={i} class="p-2 text-justify">{renderChildren(node.children)}</p>;
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

  function renderUpload(node, i) {
    return (
      <div key={i} class="p-5">
        <Image
          src={node.value?.webp?.url}
          alt={node.value?.Alt}
          width={600}
          height={600}
          class="object-cover m-auto"
        />
        {renderChildren(node.children)}
      </div>
    );
  }
</script>

{#if children.length > 0}
  {@html renderChildren(children)}
{/if} -->

<!-- 
<script>
  import Serializar from './serializar.svelte';
  import { Link } from '@sveltejs/kit';
  import Image from 'svelte-image';

  export let children = [];

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
        return <h1 class="py-20">{renderChildren(node.children)}</h1>;
      case 'h2':
        return <h2 class="py-20">{renderChildren(node.children)}</h2>;
      case 'h3':
        return <h3 class="py-20">{renderChildren(node.children)}</h3>;
      case 'h4':
        return <h4 class="py-20">{renderChildren(node.children)}</h4>;
      case 'h5':
        return <h5 class="py-20">{renderChildren(node.children)}</h5>;
      case 'h6':
        return <h6 class="py-20">{renderChildren(node.children)}</h6>;
      case 'blockquote':
        return <blockquote class="py-20 px-10 m-auto text-center font-kaushanscript">{renderChildren(node.children)}</blockquote>;
      case 'link':
        return renderLink(node, i);
      case 'indent':
        return <div class="py-10 px-3 ms:p-10">{renderChildren(node.children)}</div>;
      case 'ol':
        return <ol class="list-decimal pl-8 py-5">{renderChildren(node.children)}</ol>;
      case 'ul':
        return <ul class="list-disc pl-8 py-5">{renderChildren(node.children)}</ul>;
      case 'li':
        return <li {renderChildren(node.children)}</li>;
      case 'upload':
        return renderUpload(node, i);
      default:
        return <p class="p-2 text-justify">{renderChildren(node.children)}</p>;
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

  function renderUpload(node, i) {
    return (
      <div key={i} class="p-5">
        <Image
          src={node.value?.webp?.url}
          alt={node.value?.Alt}
          width={600}
          height={600}
          class="object-cover m-auto"
        />
        {renderChildren(node.children)}
      </div>
    );
  }
</script>

{#if children && children.length > 0}
  {@html renderChildren(children)}
{/if} -->


<script>
  import Serializar from './serializar.svelte';
  import { Link } from '@sveltejs/kit';
  import Image from 'svelte-image';

  export let children: any[] = []; // Definir children como un array

  function renderNode(node, i) {
    if (!node) return null;

    // Si el nodo tiene solo texto
    if (typeof node.text !== 'undefined') {
      return (
        <Serializar node={node} />
      );
    }

    // Renderiza según el tipo de nodo
    switch (node.type) {
      case 'h1':
        return <h1 class="py-20">{renderChildren(node.children)}</h1>;
      case 'h2':
        return <h2 class="py-20">{renderChildren(node.children)}</h2>;
      case 'h3':
        return <h3 class="py-20">{renderChildren(node.children)}</h3>;
      case 'h4':
        return <h4 class="py-20">{renderChildren(node.children)}</h4>;
      case 'h5':
        return <h5 class="py-20">{renderChildren(node.children)}</h5>;
      case 'h6':
        return <h6 class="py-20">{renderChildren(node.children)}</h6>;
      case 'blockquote':
        return <blockquote class="py-20 px-10 m-auto text-center font-kaushanscript">{renderChildren(node.children)}</blockquote>;
      case 'link':
        return renderLink(node, i);
      case 'indent':
        return <div class="py-10 px-3 ms:p-10">{renderChildren(node.children)}</div>;
      case 'ol':
        return <ol class="list-decimal pl-8 py-5">{renderChildren(node.children)}</ol>;
      case 'ul':
        return <ul class="list-disc pl-8 py-5">{renderChildren(node.children)}</ul>;
      case 'li':
        return <li>{renderChildren(node.children)}</li>;
      case 'upload':
        return renderUpload(node, i);
      default:
        return <p class="p-2 text-justify">{renderChildren(node.children)}</p>;
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

  function renderUpload(node, i) {
    return (
      <div class="p-5">
        <Image
          src={node.value?.webp?.url}
          alt={node.value?.Alt}
          width={600}
          height={600}
          class="object-cover m-auto"
        />
        {renderChildren(node.children)}
      </div>
    );
  }
</script>

{#if children && children.length > 0}
  {#each children as node, i}
    {@html renderNode(node, i)}
  {/each}
{/if}

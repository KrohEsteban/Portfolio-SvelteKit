// src/routes/[your-page]/+page.server.ts
import type { Metadata } from '@sveltejs/kit';
import type { PageLoad } from './$types'; // Ajusta la importación si usas TypeScript

async function getData() {
  const response = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/pages/64679c9e65efdb4becb2ba48`);
  return response.json();
}

async function getEtiquetas() {
  const response = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/etiquetas?limit=0`);
  return response.json();
}

async function getBlogs() {
  const response = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/blog?limit=0`);
  return response.json();
}

export const load: PageLoad = async () => {
  const data = await getData();
  const etiquetas = await getEtiquetas();
  const blogs = await getBlogs();

  // Generate metadata
  const keywords: string[] = data.PalabrasClaves.map((item: { titulo: string }) => item.titulo);

  const metadata: Metadata = {
    title: data.Title,
    description: data.Description,
    keywords: keywords,
    openGraph: {
      title: data.Title,
      description: data.Description,
      url: 'https://estebankroh.com',
      siteName: 'Esteban Kroh, programador web.',
      images: [data.ImageOpenGraph.sizes.thumbnail.url],
    },
  };

  return {
    props: {
      data,
      etiquetas,
      blogs,
      metadata
    }
  };
};

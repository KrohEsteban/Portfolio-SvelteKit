import { json } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  // Fetch data
  const resPage = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/pages/646795d7aa702068d833159e`);
  const data = await resPage.json();

  const resContactos = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/contactos?limit=0`);
  const contactos = await resContactos.json();

  const keywords = data.PalabrasClaves.map((item: { titulo: string }) => item.titulo);

  // Set metadata
  return json({
    data,
    contactos,
    metadata: {
      title: data.Title,
      description: data.Description,
      keywords,
      openGraph: {
        title: data.Title,
        description: data.Description,
        url: 'https://estebankroh.com',
        siteName: 'Esteban Kroh, programador web.',
        images: data.ImageOpenGraph.sizes.thumbnail.url,
      },
    },
  });
};

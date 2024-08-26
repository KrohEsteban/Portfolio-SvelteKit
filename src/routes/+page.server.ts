import type { Pages } from '$lib/types/pages';
import type { PageServerLoad  } from './$types';

export const load: PageServerLoad  = async ({ fetch }) => {

  const index: Pages = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages/646795d7aa702068d833159e`)
    .then(response => {
       return response.json()
    })
    .catch(() => {
      return new Error('Error al renderizar la información para la página de incio del CMS');
    })

  const keywords = index.PalabrasClaves.map((item: { titulo: string }) => item.titulo);

  return {
    index,
    metadata: {
      title: index.Title,
      description: index.Description,
      keywords,
      openGraph: {
        title: index.Title,
        description: index.Description,
        url: 'https://estebankroh.com',
        siteName: 'Esteban Kroh, developer.',
        images: index.ImageOpenGraph.sizes.thumbnail.url,
      },
    },
  };
};

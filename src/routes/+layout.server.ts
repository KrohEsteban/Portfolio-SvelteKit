
import type { Contact } from '$lib/types/contact';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad  = async ({ fetch }) => {

  const contact: Contact = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/contactos?limit=0`)
    .then(response => {
       return response.json()
    })
    .catch(() => {
      return new Error('Error al renderizar la información para los contactos del CMS');
    })

  return {
    contact
  };
};

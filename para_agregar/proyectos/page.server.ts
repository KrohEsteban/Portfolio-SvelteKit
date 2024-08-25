import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

async function getData() {
  const res = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/pages/64679bb365efdb4becb2b9fe`);
  if (!res.ok) {
    throw error(res.status, 'Failed to fetch data');
  }
  return res.json();
}

async function getProyectos() {
  const res = await fetch(`${import.meta.env.VITE_PAYLOAD_PUBLIC_SERVER_URL}/api/proyectos?limit=0`);
  if (!res.ok) {
    throw error(res.status, 'Failed to fetch projects');
  }
  return res.json();
}

export const load: PageServerLoad = async () => {
  const data = await getData();
  const proyectos = await getProyectos();

  return {
    props: {
      data,
      proyectos
    }
  };
};

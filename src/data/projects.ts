export type LocalizedText = { en: string; id: string };
export type Project = {
  name: LocalizedText;
  category: LocalizedText;
  status: LocalizedText;
  description: LocalizedText;
  image: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: { en: 'Leufay Link Shoppe', id: 'Leufay Link Shoppe' },
    category: { en: 'Product discovery', id: 'Penemuan produk' },
    status: { en: 'In development', id: 'Dalam pengembangan' },
    description: {
      en: 'A curated product discovery platform connecting anime and pop-culture audiences with products they may love.',
      id: 'Platform penemuan produk pilihan yang menghubungkan audiens anime dan pop culture dengan produk yang mungkin mereka sukai.'
    },
    image: '/assets/projects/link-shoppe.webp',
    href: '/shop/'
  },
  {
    name: { en: 'THE MVP', id: 'THE MVP' },
    category: { en: 'Digital concept', id: 'Konsep digital' },
    status: { en: 'Exploring', id: 'Sedang dieksplorasi' },
    description: {
      en: 'A productivity RPG and virtual companion concept that gives real-life progress a game-inspired spark.',
      id: 'Konsep productivity RPG dan virtual companion yang memberikan sentuhan ala game pada perkembangan di kehidupan nyata.'
    },
    image: '/assets/projects/the-mvp.webp',
    href: '/projects/'
  },
  {
    name: { en: 'Leufay Production', id: 'Leufay Production' },
    category: { en: 'Creative media', id: 'Media kreatif' },
    status: { en: 'Live', id: 'Aktif' },
    description: {
      en: 'The growing digital home for the Leufay world, its stories, and its community.',
      id: 'Rumah digital yang terus berkembang untuk dunia Leufay, cerita-ceritanya, dan komunitasnya.'
    },
    image: '/assets/projects/leufay-production.webp',
    href: '/about/'
  },
  {
    name: { en: 'Future projects', id: 'Proyek mendatang' },
    category: { en: 'Experiment', id: 'Eksperimen' },
    status: { en: 'Coming soon', id: 'Segera hadir' },
    description: {
      en: 'New ideas, digital products, and playful experiences we are currently exploring.',
      id: 'Ide baru, produk digital, dan pengalaman menyenangkan yang sedang kami eksplorasi.'
    },
    image: '/assets/projects/future.webp',
    href: '/contact/'
  }
];

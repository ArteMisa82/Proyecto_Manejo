// /app/hardware/galeria/data/gallery.ts

export type GalleryItem = {
  id: string;
  title: string;
  type: 'image' | 'video' | 'fanart'; // nuevo tipo fanart
  category: 'Consolas' | 'Accesorios' | 'Videos' | 'Museo Digital'; // nueva categoría
  src: string;       // ruta de imagen o URL de video
  thumb?: string;    // miniatura (opcional, útil en videos)
  alt?: string;

  // extras opcionales para fanart/comunidad
  author?: string;   // alias del autor
  age?: number;      // si quieres mostrar edad
  tags?: string[];   // etiquetas del fanart
  approved?: boolean; // moderación manual (si es false, no se muestra)
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Nintendo Switch 2',
    type: 'image',
    category: 'Consolas',
    src: '/imghardware/consola1.jpg',
    alt: 'Nintendo Switch 2 en escritorio',
  },
  {
    id: 'g2',
    title: 'Switch OLED',
    type: 'image',
    category: 'Consolas',
    src: '/imghardware/consola2.jpg',
    alt: 'Switch OLED en mano',
  },
  {
    id: 'g3',
    title: 'Nintendo 3DS',
    type: 'image',
    category: 'Consolas',
    src: '/imghardware/consola3.jpg',
    alt: 'Nintendo 3DS con cartuchos',
  },
  {
    id: 'g4',
    title: 'Joy-Con',
    type: 'image',
    category: 'Accesorios',
    src: '/imghardware/accesorio1.jpg',
    alt: 'Joy-Con de colores',
  },
  {
    id: 'g5',
    title: 'Joy-Con',
    type: 'image',
    category: 'Accesorios',
    src: '/imghardware/accesorio2.jpg',
    alt: 'Joy-Con de colores',
  },
  {
    id: 'g6',
    title: 'Joy-Con',
    type: 'image',
    category: 'Accesorios',
    src: '/imghardware/accesorio3.jpg',
    alt: 'Joy-Con de colores',
  },
  {
    id: 'v1',
    title: 'Uso de Joy-Con',
    type: 'video',
    category: 'Videos',
    src: 'https://www.youtube.com/embed/VIDEO_ID',
    thumb: '/imghardware/joycon.jpg',
  },
  {
    id: 'v2',
    title: 'Steam Deck tour',
    type: 'video',
    category: 'Videos',
    src: 'https://www.youtube.com/embed/VIDEO_ID_2',
    thumb: '/imghardware/steam-deck.jpg',
  },

  // --- Comunidad (fanarts/cómics que agregas manualmente) ---
  {
    id: 'fanart_1',
    title: 'Link y Zelda en Hyrule',
    type: 'fanart',
    category: 'Museo Digital',
    src: '/imghardware/fanart_link_zelda.jpg',
    alt: 'Fanart de Link y Zelda',
    author: 'Camila (12)',
    tags: ['zelda', 'acuarela'],
    approved: true,
  },
  {
    id: 'fanart_2',
    title: 'Mini cómic de Kirby',
    type: 'fanart',
    category: 'Museo Digital',
    src: '/imghardware/fancomic_kirby.jpg',
    alt: 'Mini cómic hecho por Alex',
    author: 'Alex (9)',
    tags: ['kirby', 'cómic'],
    approved: true,
  },
];


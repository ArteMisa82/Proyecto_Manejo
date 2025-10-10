// /app/hardware/galeria/data/gallery.ts

export type GalleryItem = {
  id: string;
  title: string;
  type: 'image' | 'video';
  category: 'Consolas' | 'Accesorios' | 'Videos';
  src: string;     // imagen o URL del video (YouTube/MP4)
  thumb?: string;  // miniatura para videos
  alt?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Nintendo Switch 2',
    type: 'image',
    category: 'Consolas',
    src: '/imghardware/switch2.jpg',
    alt: 'Nintendo Switch 2 en escritorio'
  },
  {
    id: 'g2',
    title: 'Switch OLED',
    type: 'image',
    category: 'Consolas',
    src: '/imghardware/switch_oled.jpg',
    alt: 'Switch OLED en mano'
  },
  {
    id: 'g3',
    title: 'Nintendo 3DS',
    type: 'image',
    category: 'Consolas',
    src: '/imghardware/3ds.jpg',
    alt: 'Nintendo 3DS con cartuchos'
  },
  {
    id: 'g4',
    title: 'Joy-Con',
    type: 'image',
    category: 'Accesorios',
    src: '/imghardware/joycon.jpg',
    alt: 'Joy-Con de colores'
  },
  {
    id: 'v1',
    title: 'Uso de Joy-Con',
    type: 'video',
    category: 'Videos',
    src: 'https://www.youtube.com/embed/VIDEO_ID',
    thumb: '/imghardware/joycon.jpg'
  },
  {
    id: 'v2',
    title: 'Steam Deck tour',
    type: 'video',
    category: 'Videos',
    src: 'https://www.youtube.com/embed/VIDEO_ID_2',
    thumb: '/imghardware/steam-deck.jpg'
  }
];

'use client';

import Image from 'next/image';
import TopNav from '../../components/TopNav';
import { galleryItems, type GalleryItem } from './data/gallery';
import '../imp/impStyles.css';
import './galleryStyles.css';
import { useRef } from 'react';

const ORDER: Array<GalleryItem['category']> = [
  'Accesorios',
  'Consolas',
  'Museo Digital',
  'Videos', // los videos van abajo y en vertical
];

/** Convierte links de YouTube (watch o youtu.be) a /embed/... */
function toEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      const id = u.pathname.replace('/', '');
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  } catch {
    return url;
  }
}

/** ---- Carrusel básico con scroll snapping ---- */
function Carousel({
  title,
  items,
}: {
  title: string;
  items: GalleryItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const delta = dir === 'next' ? el.clientWidth * 0.9 : -el.clientWidth * 0.9;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white/90">
          {title}
        </h2>

        <div className="hidden md:flex gap-2">
          <button className="carousel-btn" onClick={() => scrollBy('prev')}>‹</button>
          <button className="carousel-btn" onClick={() => scrollBy('next')}>›</button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <figure
              key={item.id}
              className="snap-center shrink-0 w-[82vw] sm:w-[360px] lg:w-[380px]
                         rounded-xl overflow-hidden ring-1 ring-white/10
                         hover:ring-white/20 transition duration-300 bg-black/30"
              title={item.title}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.src}
                  alt={item.alt ?? item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 82vw, 360px"
                />
              </div>
              {/* Pie de foto opcional: */}
              <figcaption className="px-3 py-2 text-sm text-white/80 line-clamp-2">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Controles en móviles (flotan sobre el carrusel) */}
        <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 pointer-events-none">
          <button
            onClick={() => scrollBy('prev')}
            className="carousel-btn pointer-events-auto"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={() => scrollBy('next')}
            className="carousel-btn pointer-events-auto"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GaleriaPage() {
  // Oculta elementos no aprobados (si approved === false no se muestra)
  const base = galleryItems.filter((i) => i.approved !== false);

  // Separamos por tipo para el layout:
  const accesorios = base.filter((i) => i.category === 'Accesorios' && i.type !== 'video');
  const consolas = base.filter((i) => i.category === 'Consolas' && i.type !== 'video');
  const museo    = base.filter((i) => i.category === 'Museo Digital' && i.type !== 'video');
  const videos   = base.filter((i) => i.type === 'video'); // todos los videos juntos al final

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV FIJA */}
      <TopNav />

      {/* PORTADA */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[55vh] md:h-[75vh] overflow-hidden">
          <Image
            src="/imghardware/buena.jpg"
            alt="Banner galería"
            width={1720}
            height={1000}
            priority
            className="object-cover object-center w-full h-full"
    />
  </div>

  <div className="absolute inset-0 bg-black/35 md:bg-black/30" />
  <div className="absolute inset-0 flex items-center justify-center">
    {/* tu texto o botones */}
  </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold">Galería</h1>
            <p className="mt-3 text-white/80">
              Fotos, videos y piezas de nuestro museo digital.
            </p>
            <a href="#contenido" className="btn-hardware mt-6">
              Ver contenido
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO: carruseles + videos en columna */}
      <section id="contenido" className="mx-auto max-w-7xl px-4 py-14 space-y-16 md:space-y-20">
        {accesorios.length > 0 && (
          <Carousel title="Accesorios" items={accesorios} />
        )}

        {consolas.length > 0 && (
          <Carousel title="Consolas" items={consolas} />
        )}

        {museo.length > 0 && (
          <Carousel title="Museo Digital" items={museo} />
        )}

        {/* VIDEOS: uno debajo de otro, grandes y centrados */}
        {videos.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white/90">
              Videos
            </h2>

            <div className="space-y-10">
              {videos.map((v) => (
                <article key={v.id} className="mx-auto w-full max-w-5xl">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 bg-black/40">
                    <iframe
                      src={toEmbedUrl(v.src)}
                      title={v.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-3 text-sm md:text-base text-white/80">{v.title}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

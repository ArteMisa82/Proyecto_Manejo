'use client';

import Image from 'next/image';
import TopNav from '../../components/TopNav';
import { galleryItems, type GalleryItem } from './data/gallery';
import '../imp/impStyles.css';
import './galleryStyles.css';

const ORDER: Array<GalleryItem['category']> = [
  'Accesorios',
  'Consolas',
  'Videos',
  'Museo Digital',
];

/** Convierte links de YouTube (watch o youtu.be) a /embed/... */
function toEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    // youtu.be/<id>
    if (u.hostname.includes('youtu.be')) {
      const id = u.pathname.replace('/', '');
      return `https://www.youtube.com/embed/${id}`;
    }
    // www.youtube.com/watch?v=<id>
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    // Si ya es /embed/ o servicio distinto, devuelvo tal cual
    return url;
  } catch {
    return url;
  }
}

export default function GaleriaPage() {
  // Oculta elementos no aprobados (si approved === false no se muestra)
  const base = galleryItems.filter((i) => i.approved !== false);

  // Agrupo por categoría respetando el orden deseado
  const groups = ORDER.map((cat) => ({
    cat,
    items: base.filter((i) => i.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV FIJA */}
      <TopNav />

      {/* PORTADA / BANNER */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <Image
            src="/imghardware/portada.jpg"
            alt="Banner galería"
            width={1720}
            height={1000}
            priority
            className="w-full h-[50vh] md:h-[60vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold">Galería</h1>
            <p className="mt-3 text-white/80">
              Fotos y videos de consolas, accesorios, comparativas y museo digital.
            </p>
            <a href="#grid" className="btn-hardware mt-6">
              Ver todo
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA POR SECCIONES (más separación) */}
      <section
        id="grid"
        className="mx-auto max-w-7xl px-4 pb-20 space-y-16 md:space-y-20"
      >
        {groups.map((group) => (
          <div key={group.cat} className="space-y-6">
            {/* Título de sección */}
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white/90">
              {group.cat}
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {group.items.map((item) => {
                // Para videos: render inline con iframe
                if (item.type === 'video') {
                  const embed = toEmbedUrl(item.src);
                  return (
                    <div
                      key={item.id}
                      className="rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition"
                      title={item.title}
                    >
                      <div className="relative w-full aspect-video bg-black/40">
                        <iframe
                          src={embed}
                          title={item.title}
                          className="absolute inset-0 h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  );
                }

                // Para imágenes (consolas, accesorios, museo)
                return (
                  <figure
                    key={item.id}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-[transform,box-shadow] duration-300 hover:scale-[1.01]"
                    title={item.title}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt ?? item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <figcaption className="sr-only">{item.title}</figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}


'use client';

import Image from 'next/image';
import { useState } from 'react';
import { galleryItems, type GalleryItem } from './data/gallery';
import '../imp/impStyles.css';
import './galleryStyles.css';

type Filter = 'Todos' | 'Consolas' | 'Accesorios' | 'Videos';

export default function GaleriaPage() {
  const [filter, setFilter] = useState<Filter>('Todos');

  const filtered =
    filter === 'Todos'
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-black text-white">

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
              Fotos y videos de consolas, accesorios y comparativas.
            </p>
            <a href="#grid" className="btn-hardware mt-6">Ver todo</a>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-2 flex-wrap">
          {(['Todos', 'Consolas', 'Accesorios', 'Videos'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`chip ${filter === f ? 'chip--active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section id="grid" className="mx-auto max-w-7xl px-4 pb-12">
        <div className="hardware-grid">
          {filtered.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* VIDEOS DE USO (destacados) */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h3 className="text-lg font-semibold mb-4">Videos de uso de equipos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems
            .filter((i) => i.type === 'video')
            .slice(0, 2)
            .map((v) => (
              <div key={v.id} className="video-wrapper rounded-xl overflow-hidden">
                <iframe
                  src={v.src}
                  title={v.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

function Card({ item }: { item: GalleryItem }) {
  if (item.type === 'image') {
    return (
      <article className="card-hardware cursor-zoom-in">
        <div className="relative h-48">
          <Image
            src={item.src}
            alt={item.alt ?? item.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="card-content">
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-xs text-white/60 mt-1">{item.category}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="card-hardware">
      <div className="relative h-48">
        <Image
          src={item.thumb ?? '/imghardware/portada.jpg'}
          alt={item.title}
          fill
          className="object-cover"
        />
        <span className="video-badge">▶</span>
      </div>
      <div className="card-content">
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-xs text-white/60 mt-1">{item.category}</p>
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hardware mt-3"
        >
          Ver video
        </a>
      </div>
    </article>
  );
}

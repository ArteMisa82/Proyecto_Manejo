'use client';

import Image from 'next/image';
import { useState } from 'react';
import { galleryItems, type GalleryItem } from './data/gallery';
import TopNav from '../../components/TopNav';         // 👈 NUEVO
import '../imp/impStyles.css';
import './galleryStyles.css';

type Filter = 'Todos' | 'Consolas' | 'Accesorios' | 'Videos' | 'Museo Digital';

export default function GaleriaPage() {
  const [filter, setFilter] = useState<Filter>('Todos');

  // Oculta elementos no aprobados (si no pones approved, se muestra)
  const base = galleryItems.filter((i) => i.approved !== false);
  const filtered = filter === 'Todos' ? base : base.filter((i) => i.category === filter);

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
            <a href="#grid" className="btn-hardware mt-6">Ver todo</a>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-2 flex-wrap">
          {(['Todos', 'Consolas', 'Accesorios', 'Videos', 'Museo Digital'] as Filter[]).map((f) => (
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
    </div>
  );
}

function Card({ item }: { item: GalleryItem }) {
  const isVideo = item.type === 'video';
  const isFanart = item.type === 'fanart';

  return (
    <article className="card-hardware">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.thumb ?? item.src}
          alt={item.alt ?? item.title}
          fill
          className="object-cover"
        />
        {/* Distintivos */}
        {isVideo && <span className="video-badge">▶</span>}
        {isFanart && <span className="video-badge">★</span>}
      </div>

      <div className="card-content">
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-xs text-white/60 mt-1">
          {isFanart
            ? `Museo Digital${item.author ? ` • ${item.author}` : ''}`
            : item.category}
        </p>

        {/* Tags solo para fanart (opcional) */}
        {isFanart && item.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-1">
            {item.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        ) : null}

        {/* Acción */}
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hardware mt-3"
        >
          {isVideo ? 'Ver video' : 'Ver grande'}
        </a>
      </div>
    </article>
  );
}

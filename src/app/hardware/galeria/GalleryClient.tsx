// hardware/galeria/GalleryClient.tsx
'use client';

import Image from 'next/image';
import TopNav from '../../components/TopNav';

// La importación de datos locales (galleryItems) y tipos (GalleryItem) fue ELIMINADA.
import '../imp/impStyles.css';
import './galleryStyles.css';
import { useRef } from 'react';

// --- DEFINICIÓN DE TIPOS ---

// 💡 1. Tipo de dato que viene del Server Component (Prisma)
type HardwareItem = {
    id_har: number;
    nom_har: string;
    tipo_har: string | null; // Usaremos esto para la categoría
    img_har: string | null; // Usaremos esto para la imagen
    url_har: string | null; // Usaremos esto para el video
};

// 💡 2. Tipo de dato para uso interno (lo que solía ser GalleryItem)
type MappedGalleryItem = {
    id: number;
    title: string;
    src: string;
    videoSrc: string; // Separamos la URL del video para mayor claridad
    category: 'Accesorios' | 'Consolas' | 'Museo Digital' | 'Videos' | string;
    type: 'image' | 'video';
    alt: string;
    approved: boolean;
};

// ❌ Eliminamos const ORDER ya que dependía del tipo GalleryItem.

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
    // 💡 USAR EL NUEVO TIPO MappedGalleryItem
    items: MappedGalleryItem[]; 
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
            {/* ... el JSX del carrusel permanece igual ... */}
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
                                    src={item.src} // USANDO item.src (imagen)
                                    alt={item.alt ?? item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 82vw, 360px"
                                />
                            </div>
                            <figcaption className="px-3 py-2 text-sm text-white/80 line-clamp-2">
                                {item.title}
                            </figcaption>
                        </figure>
                    ))}
                </div>
                {/* ... Controles en móviles ... */}
            </div>
        </div>
    );
}

// 💡 3. MODIFICAR EL COMPONENTE PRINCIPAL PARA ACEPTAR LA PROP serverItems
export default function GaleriaPage({ serverItems }: { serverItems: HardwareItem[] }) {
    
    // --- LÓGICA DE MAPEO DE DATOS (Prisma -> UI) ---
    const mappedItems: MappedGalleryItem[] = serverItems.map(item => ({
        id: item.id_har,
        title: item.nom_har,
        src: item.img_har || '/imghardware/default.jpg', // Imagen de Prisma
        videoSrc: item.url_har || '', // URL de video de Prisma
        category: item.tipo_har || 'Otros', // Categoría de Prisma
        // Si url_har existe y es una URL válida, es un video
        type: (item.url_har && item.url_har.includes('http')) ? 'video' : 'image',
        alt: item.nom_har,
        approved: true,
    }));

    // Oculta elementos no aprobados (si approved === false no se muestra)
    // 💡 USAR mappedItems en lugar de galleryItems
    const base = mappedItems.filter((i) => i.approved !== false); 

    // Separamos por tipo para el layout:
    const accesorios = base.filter((i) => i.category === 'Accesorios' && i.type !== 'video');
    const consolas = base.filter((i) => i.category === 'Consolas' && i.type !== 'video');
    const museo    = base.filter((i) => i.category === 'Museo Digital' && i.type !== 'video');
    const videos   = base.filter((i) => i.type === 'video'); 

    return (
        <div className="min-h-screen bg-black text-white">
            {/* NAV FIJA */}
            <TopNav />
            {/* PORTADA, etc... */}

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
                                            // 💡 USAR v.videoSrc (que obtuvimos de url_har)
                                            src={toEmbedUrl(v.videoSrc)} 
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
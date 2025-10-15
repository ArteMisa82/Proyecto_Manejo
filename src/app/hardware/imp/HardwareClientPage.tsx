// app/imp/HardwareClientPage.tsx (Client Component)
'use client';

import Image from 'next/image';

import '../imp/impStyles.css';

// 1. 💡 IMPORTAMOS EL TIPO DE DATO DEFINIDO EN EL SERVER COMPONENT
import { HardwareItemFromPrisma } from "./page"; 


// 2. --- DEFINICIÓN DE TIPOS INTERNOS ---
type MappedHardwareItem = {
    id: number; 
    category: string; // Será en mayúsculas después del mapeo
    title: string;
    description?: string;
    imagePath: string;
    videoLink: string; 
    pageLink: string; 
    features?: string[];
};


// 3. --- LÓGICA DE MAPPERS Y HELPERS ---
const mapPrismaToUI = (items: HardwareItemFromPrisma[]): MappedHardwareItem[] => {
    return items.map(item => ({
        id: item.id_har,
        // CORRECCIÓN CLAVE: Normalizamos la categoría (trim y mayúsculas) para evitar errores de coincidencia
        category: (item.tipo_har?.trim().toUpperCase() || 'UNKNOWN'),
        title: item.nom_har,
        description: item.des_har || undefined,
        imagePath: item.img_har || '/imghardware/placeholder.jpg',
        videoLink: item.url_har || '#', 
        // Usa web_url_har para el botón principal
        pageLink: item.web_url_har || item.url_har || '#', 
        features: undefined,
    }));
};


// 4. --- COMPONENTE DE TARJETA (HardwareCard) ---
const HardwareCard = ({ item }: { item: MappedHardwareItem }) => (
    <article className="card-hardware">
        <div className="relative h-44 overflow-hidden">
            <Image 
                src={item.imagePath} 
                alt={item.title} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>
        <div className="card-content">
            <h4 className="mt-2 font-semibold">{item.title}</h4>
            
            {item.description && (
                <p className="text-sm text-white/60">{item.description}</p>
            )}

            <a
                href={item.pageLink} // Ahora apunta a web_url_har
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
            >
                Ver detalles
            </a>
            
            {/* Opcional: Mostrar un enlace secundario si hay un link de video diferente */}
            {item.videoLink !== '#' && item.videoLink !== item.pageLink && (
                <a 
                    href={item.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 mt-2 block hover:underline"
                >
                    Ver Trailer
                </a>
            )}
        </div>
    </article>
);


// 5. --- FUNCIÓN DE RENDERIZADO (renderContent) ---
const renderContent = (items: MappedHardwareItem[]) => {
    if (items.length === 0) {
      return (
        <div className="text-center py-8 text-white/50">
          <p className="text-xl">No hay equipos disponibles en esta categoría.</p>
        </div>
      );
    }
    
    return (
      <div className="hardware-grid">
        {items.map((item) => ( 
          // Solución al error 'any' implícito: el tipo está definido en la firma de renderContent
          <HardwareCard key={item.id} item={item} />
        ))}
      </div>
    );
};


// 6. 💡 COMPONENTE CLIENTE PRINCIPAL (HardwareClientPage)
export default function HardwareClientPage({ serverItems }: { serverItems: HardwareItemFromPrisma[] }) {
    
    const hardwareItems = mapPrismaToUI(serverItems);

    // ✅ FILTROS CORREGIDOS: Coinciden con el formato en mayúsculas del mapper
    const recentHardware = hardwareItems.filter(item => 
        item.category === 'NUEVO' || 
        item.category === 'DESTACADO' || 
        item.category === 'CLÁSICO'
    );

    const consoleHardware = hardwareItems.filter(item => item.category === 'CONSOLA');

    const accessoryHardware = hardwareItems.filter(item => item.category === 'ACCESORIO');
    
    
    return (
        <div className="min-h-screen bg-black text-white">
            
            
            {/* EQUIPOS RECIENTES (Dinámico) */}
            <section id="recientes" className="mx-auto max-w-7xl px-4 py-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Equipos recientes</h3>
                    <span className="text-xs text-white/50">Desliza →</span>
                </div>
                {renderContent(recentHardware)}
            </section>

            {/* MÁS CONSOLAS (Dinámico) */}
            <section className="mx-auto max-w-7xl px-4 pb-12">
                <h3 className="text-lg font-semibold mb-4">Más consolas</h3>
                {renderContent(consoleHardware)}
            </section>
            
            {/* ACCESORIOS (Dinámico) */}
            <section className="mx-auto max-w-7xl px-4 pb-16">
                <h3 className="text-lg font-semibold mb-4">Accesorios</h3>
                {renderContent(accessoryHardware)}
            </section>
        </div>
    );
}

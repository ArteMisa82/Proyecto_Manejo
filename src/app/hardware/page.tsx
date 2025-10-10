'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HardwarePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV LOCAL */}
      <header className="sticky top-0 z-30 w-full bg-[#0b0f19]/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <h1 className="text-sm tracking-wide uppercase text-white/80">Hardware</h1>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10"
          >
            <span>☰</span> Opciones
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <Image
            src="/hero.jpg"
            alt="Banner hardware"
            width={1920}
            height={1080}
            priority
            className="w-full h-[80vh] md:h-[90vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35 md:bg-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
              Explora los equipos más recientes
            </h2>
            <p className="mt-3 text-white/80">
              Consolas, accesorios y comparativas en un solo lugar.
            </p>
            <a
              href="#recientes"
              className="mt-6 inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-sm font-medium"
            >
              Ver destacados
            </a>
          </div>
        </div>
      </section>

      {/* DRAWER */}
      {open && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#0f1424] shadow-xl border-l border-white/10">
            <div className="flex items-center justify-between px-4 h-14 border-b border-white/10">
              <h3 className="text-sm tracking-wide uppercase text-white/80">Hardware – Navegación</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md border border-white/15 px-2 py-1 text-sm hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <div className="p-4 space-y-6 text-sm">
              <div>
                <p className="uppercase text-white/50 mb-2">Consolas</p>
                <ul className="space-y-1">
                  <li><Link href="/hardware/switch2" className="hover:underline">Nintendo Switch 2</Link></li>
                  <li><Link href="/hardware/switch-oled" className="hover:underline">Nintendo Switch OLED</Link></li>
                  <li><Link href="/hardware/3ds" className="hover:underline">Nintendo 3DS</Link></li>
                </ul>
              </div>
              <div>
                <p className="uppercase text-white/50 mb-2">Accesorios</p>
                <ul className="space-y-1">
                  <li><Link href="/hardware/accesorios/joycon" className="hover:underline">Joy-Con</Link></li>
                  <li><Link href="/hardware/accesorios/pro-controller" className="hover:underline">Pro Controller</Link></li>
                  <li><Link href="/hardware/accesorios/dock" className="hover:underline">Dock</Link></li>
                </ul>
              </div>
              <div>
                <p className="uppercase text-white/50 mb-2">Utilidades</p>
                <ul className="space-y-1">
                  <li><Link href="/hardware/comparativas" className="hover:underline">Comparativas</Link></li>
                  <li><Link href="/hardware/faq" className="hover:underline">Preguntas frecuentes</Link></li>
                  <li><Link href="/hardware/soporte" className="hover:underline">Soporte técnico</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* EQUIPOS RECIENTES */}
      <section id="recientes" className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Equipos recientes</h3>
          <span className="text-xs text-white/50">Desliza →</span>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Card 1 */}
            <article className="snap-start shrink-0 w-80 bg-[#0f0f12] rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/switch2.jpg"
                alt="Nintendo Switch 2"
                width={1280}
                height={720}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="inline-block text-[10px] uppercase tracking-wide text-black bg-red-400/90 px-2 py-0.5 rounded">
                  Nuevo
                </span>
                <h4 className="mt-2 font-semibold">Nintendo Switch 2</h4>
                <p className="text-sm text-white/60">120Hz, mejor autonomía y rendimiento superior.</p>
                <Link href="/hardware/switch2" className="mt-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm hover:bg-blue-500">
                  Ver detalles
                </Link>
              </div>
            </article>

            {/* Card 2 */}
            <article className="snap-start shrink-0 w-80 bg-[#0f0f12] rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/switch_oled.jpg"
                alt="Nintendo Switch OLED"
                width={1280}
                height={720}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="inline-block text-[10px] uppercase tracking-wide text-black bg-cyan-300/90 px-2 py-0.5 rounded">
                  Destacado
                </span>
                <h4 className="mt-2 font-semibold">Nintendo Switch OLED</h4>
                <p className="text-sm text-white/60">Pantalla OLED de 7” y audio mejorado.</p>
                <Link href="/hardware/switch-oled" className="mt-3 inline-flex items-center rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10">
                  Ver detalles
                </Link>
              </div>
            </article>

            {/* Card 3 */}
            <article className="snap-start shrink-0 w-80 bg-[#0f0f12] rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/3ds.jpg"
                alt="Nintendo 3DS"
                width={1280}
                height={720}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="inline-block text-[10px] uppercase tracking-wide text-black bg-zinc-300/90 px-2 py-0.5 rounded">
                  Clásico
                </span>
                <h4 className="mt-2 font-semibold">Nintendo 3DS</h4>
                <p className="text-sm text-white/60">3D sin gafas y catálogo retro portátil.</p>
                <Link href="/hardware/3ds" className="mt-3 inline-flex items-center rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10">
                  Ver detalles
                </Link>
              </div>
            </article>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent" />
        </div>
      </section>

      {/* GRID DE TARJETAS */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <h3 className="text-lg font-semibold mb-4">Consolas y especificaciones</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <article className="bg-[#0f0f12] rounded-xl border border-white/10 overflow-hidden">
            <Image src="/switch2.jpg" alt="Switch 2" width={1280} height={720} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Nintendo Switch 2</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>Pantalla 7.5” · 120Hz</li>
                <li>512GB almacenamiento</li>
                <li>Wi-Fi 6 · BT 5.3</li>
              </ul>
              <Link href="/hardware/switch2" className="mt-3 inline-flex rounded-md bg-blue-600 px-3 py-1.5 text-sm hover:bg-blue-500">
                Ver más
              </Link>
            </div>
          </article>

          <article className="bg-[#0f0f12] rounded-xl border border-white/10 overflow-hidden">
            <Image src="/switch_oled.jpg" alt="Switch OLED" width={1280} height={720} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Nintendo Switch OLED</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>Pantalla OLED 7”</li>
                <li>64GB internos</li>
                <li>Dock con LAN</li>
              </ul>
              <Link href="/hardware/switch-oled" className="mt-3 inline-flex rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10">
                Ver más
              </Link>
            </div>
          </article>

          <article className="bg-[#0f0f12] rounded-xl border border-white/10 overflow-hidden">
            <Image src="/3ds.jpg" alt="3DS" width={1280} height={720} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Nintendo 3DS</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>3D sin gafas</li>
                <li>Tarjetas SD</li>
                <li>Gran catálogo clásico</li>
              </ul>
              <Link href="/hardware/3ds" className="mt-3 inline-flex rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10">
                Ver más
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

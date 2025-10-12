'use client';

import Image from 'next/image';
// ⚠️ Elimina useState, Link y todo lo del drawer viejo si ya no lo usas
import TopNav from '../../components/TopNav'; 
import './impStyles.css';

export default function HardwarePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 🔹 Menú lateral reutilizable */}
      {/* NAV FIJA */}
      <TopNav />

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <Image
            src="/imghardware/hero.jpg"
            alt="Banner hardware"
            width={1820}
            height={1000}
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
            <a href="#recientes" className="btn-hardware mt-6">
              Ver destacados
            </a>
          </div>
        </div>
      </section>

      {/* EQUIPOS RECIENTES */}
      <section id="recientes" className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Equipos recientes</h3>
          <span className="text-xs text-white/50">Desliza →</span>
        </div>

        <div className="hardware-grid">
          {/* Nintendo Switch 2 */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/switch2.jpg" alt="Nintendo Switch 2" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="mt-2 font-semibold">Nintendo Switch 2</h4>
              <p className="text-sm text-white/60">
                120Hz, mejor autonomía y rendimiento superior.
              </p>
              <a
                href="https://www.nintendo.com/switch/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver detalles
              </a>
            </div>
          </article>

          {/* Nintendo Switch OLED */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/switch_oled.jpg" alt="Nintendo Switch OLED" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="mt-2 font-semibold">Nintendo Switch OLED</h4>
              <p className="text-sm text-white/60">Pantalla OLED de 7” y audio mejorado.</p>
              <a
                href="https://www.nintendo.com/switch/oled-model/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver detalles
              </a>
            </div>
          </article>

          {/* Nintendo 3DS */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/3ds.jpg" alt="Nintendo 3DS" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="mt-2 font-semibold">Nintendo 3DS</h4>
              <p className="text-sm text-white/60">3D sin gafas y catálogo retro portátil.</p>
              <a
                href="https://www.nintendo.com/3ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver detalles
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* MÁS CONSOLAS */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <h3 className="text-lg font-semibold mb-4">Más consolas</h3>

        <div className="hardware-grid">
          {/* PlayStation Classic */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/ps-classic.jpg" alt="PlayStation Classic" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="font-semibold">PlayStation Classic</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>20 juegos clásicos incluidos</li>
                <li>Salida HDMI</li>
                <li>2 mandos incluidos</li>
              </ul>
              <a
                href="https://www.amazon.com/-/es/Original-PlayStation-Classic-Console-Games-Renewed/dp/B084CVQR7Y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver más
              </a>
            </div>
          </article>

          {/* Xbox One */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/xbox-one.jpg" alt="Xbox One" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="font-semibold">Xbox One</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>HDR10 · 4K streaming</li>
                <li>1TB almacenamiento</li>
                <li>Retrocompatibilidad</li>
              </ul>
              <a
                href="https://www.xbox.com/en-US/consoles/xbox-one"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver más
              </a>
            </div>
          </article>

          {/* PlayStation 4 */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/ps4.jpg" alt="PlayStation 4" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="font-semibold">PlayStation 4</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>GPU GCN · 8 GB GDDR5</li>
                <li>DualShock 4</li>
                <li>Gran catálogo exclusivo</li>
              </ul>
              <a
                href="https://www.playstation.com/en-us/ps4/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver más
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ACCESORIOS */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h3 className="text-lg font-semibold mb-4">Accesorios</h3>

        <div className="hardware-grid">
          {/* Joy-Con */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/joycon.jpg" alt="Joy-Con" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="font-semibold">Joy-Con</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>Vibración HD</li>
                <li>Modo individual o pareja</li>
                <li>Colores variados</li>
              </ul>
              <a
                href="https://www.nintendo.com/us/store/products/nintendo-switch-2-joy-con-2-l-r-light-blue-light-red-123677/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver más
              </a>
            </div>
          </article>

          {/* Tarjeta de memoria */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/microsd.jpg" alt="Tarjeta de memoria" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="font-semibold">Tarjeta de memoria</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>microSD UHS-I</li>
                <li>128–512 GB</li>
                <li>Optimizada para consolas</li>
              </ul>
              <a
                href="https://shop.sandisk.com/es-la/products/memory-cards/microsd-cards/sandisk-nintendo-switch-microsd?sku=SDSQXAO-064G-GN6ZN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver más
              </a>
            </div>
          </article>

          {/* Steam Deck */}
          <article className="card-hardware">
            <div className="relative h-44 overflow-hidden">
              <Image src="/imghardware/steam-deck.jpg" alt="Steam Deck" fill className="object-cover" />
            </div>
            <div className="card-content">
              <h4 className="font-semibold">Steam Deck</h4>
              <ul className="mt-2 text-sm text-white/65 space-y-1">
                <li>APU AMD · 16 GB RAM</li>
                <li>Pantalla 7”</li>
                <li>Modo dock opcional</li>
              </ul>
              <a
                href="https://store.steampowered.com/steamdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hardware mt-3"
              >
                Ver más
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

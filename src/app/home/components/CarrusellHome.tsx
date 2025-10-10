"use client"; 

import Image from "next/image";
import { useRef } from "react";

export default function HardwareCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const hardwareItems = [
    { id: 1, name: "PlayStation 5", img: "/home/playstation5.jpeg" },
    { id: 2, name: "Xbox Series X", img: "/home/xboxSerieX.png" },
    { id: 3, name: "Nintendo Switch OLED", img: "/home/swichtOled.jpg" },
    { id: 4, name: "Tarjeta Gráfica RTX 4090", img: "/home/tarjetaGrafica.jpg" },
    { id: 5, name: "Monitor Curvo 144Hz", img: "/home/monitorCurvo.jpeg" },
    { id: 6, name: "Set Gamer RGB", img: "/home/comboGamer_GT2C.png" },
  ];

  return (
    <section className="my-10 px-5 relative">
      <h2 className="text-2xl font-bold mb-5">Hardware y Setup</h2>

      <div className="relative overflow-hidden">
        {/* Contenedor sin scroll por mouse/touch */}
        <div
          ref={carouselRef}
          className="flex gap-4 transition-transform duration-500"
          style={{ overflow: "hidden" }}
        >
          {hardwareItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[300px] md:min-w-[400px] flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={250}
                className="object-cover w-full h-[250px] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white font-semibold text-lg">{item.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full p-3 z-10"
        >
          ‹
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full p-3 z-10"
        >
          ›
        </button>
      </div>
    </section>
  );
}
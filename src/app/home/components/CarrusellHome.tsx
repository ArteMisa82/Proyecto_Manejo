"use client"; 

import Image from "next/image";
import { useRef,useState,useEffect } from "react";

interface Hardware {
  id_har: number;
  nom_har: string;
  img_har?: string | null;
  tipo_har?: string | null;
  des_har?: string | null;
}

export default function HardwareCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hardwareItems, setHardwareItems] = useState<Hardware[]>([]);

  useEffect(() => {
    fetch("/api/hardware")
      .then((res) => res.json())
      .then((data) => setHardwareItems(data))
      .catch((err) => console.error("Error cargando hardware:", err));
  }, []);
  
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

  
  return (
    <section className="my-10 px-5 relative">
      <h2 className="text-2xl font-bold mb-5">Hardware y Setup</h2>

      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4 transition-transform duration-500"
          style={{ overflow: "hidden" }}
        >
          {hardwareItems.map((item) => (
            <div
              key={item.id_har}
              className="min-w-[300px] md:min-w-[400px] flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer"
            >
              <Image
                src={item.img_har || "/default.png"}
                alt={item.nom_har}
                width={400}
                height={250}
                className="object-cover w-full h-[250px] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white font-semibold text-lg">{item.nom_har}</p>
              </div>
            </div>
          ))}
        </div>

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
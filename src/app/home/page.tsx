import Image from "next/image";
import Link from "next/link";
import HardwareCarousel from "./components/CarrusellHome";
import NewsSection from "./components/NewsSection";
import JuegosFranquicias from "./components/JuegosFranquicias";
import { prisma } from "./src/lib/prisma";

const games = [
  { id: 1, name: "Ghost of Tsushima", img: "/home/GHOST.png", offer: "-33%" },
  { id: 2, name: "XBOX", img: "/home/xbox-logo.jpg" },
  { id: 3, name: "Little Nightmares III", img: "/home/little.jpg" },
  { id: 4, name: "Battlefield 6", img: "/home/battlefield6.jpg" },
  { id: 5, name: "Playstation", img: "/home/playstation-logo.jpeg" },
];

const news = [
  {
    id: 1,
    title: "Noticia 1",
    img: "/news/news1.jpg",
    date: "10 Oct",
    summary: "Resumen...",
  },
];

const communities = [{ id: 1, name: "Comunidad A", members: 120 }];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="relative w-full h-[700px] overflow-hidden">
        <Link href="/juegos">
          <Image
            src="/home/Banner_home.png"
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">
              Explora los nuevos lanzamientos
            </h1>
          </div>
        </Link>
      </div>

      {/* Juegos + Franquicias */}
      <div className="font-sans"></div>
      <JuegosFranquicias games={games} />

      <div className="font-sans">
        {/* Carrusel Hardware */}
        <HardwareCarousel />
      </div>

      {/* Noticias + Próximos Estrenos */}
      <NewsSection />
    </div>
  );
}

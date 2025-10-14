// src/app/home/page.tsx
import Image from "next/image";
import Link from "next/link";
import HardwareCarousel from "./components/CarrusellHome";
import NewsSection, { NewsItem } from "./components/NewsSection";
import JuegosFranquicias from "./components/JuegosFranquicias";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // ✅ Consultas Prisma directas (Server Component)
  const gamesRaw = await prisma.juegos.findMany({
    select: {
      id_jue: true,
      nom_jue: true,
      img_jue: true,
      pre_ofe_jue: true,
      porc_desc_jue: true,
    },
  });

  const newsRaw = await prisma.noticias.findMany({
    select: {
      id_not: true,
      tit_not: true,
      img_not: true,
      fec_not: true,
      res_not: true,
      url_not: true,
    },
    orderBy: { fec_not: "desc" },
    take: 5,
  });

  // 🔹 Formatear datos
  const games = gamesRaw.map((g) => ({
    id: g.id_jue,
    name: g.nom_jue,
    img: g.img_jue || "/default-game.png",
    offer: g.porc_desc_jue ? `-${g.porc_desc_jue}%` : undefined,
  }));

  const news: NewsItem[] = newsRaw.map((n) => ({
    id: n.id_not,
    title: n.tit_not,
    imageUrl: n.img_not || "/default-news.png",
    date: n.fec_not.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    summary: n.res_not || "",
    link: n.url_not || "#",
  }));

  // 🔹 Render del Home
  return (
    <main className="font-sans bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Link href="/juegos" className="block w-full h-full">
          <Image
            src="/home/Banner_home.png"
            alt="Banner principal"
            fill
            className="object-cover brightness-75 hover:brightness-90 transition duration-500"
            priority
          />
          {/* Overlay de texto centrado */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Explora lo mejor del gaming 
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Ofertas, hardware y noticias del mundo gamer
            </p>
            
          </div>
        </Link>
      </section>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-10 space-y-16">
        {/* Juegos + Franquicias */}
        <section>
          <JuegosFranquicias games={games} />
        </section>

        {/* Carrusel de Hardware */}
        <section>
          <HardwareCarousel />
        </section>

        {/* Noticias + Estrenos */}
        <section>
          <NewsSection newsData={news} />
        </section>
      </div>
    </main>
  );
}

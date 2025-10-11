// src/app/home/page.tsx
import Image from "next/image";
import Link from "next/link";
import HardwareCarousel from "./components/CarrusellHome";
import NewsSection, { NewsItem } from "./components/NewsSection";
import JuegosFranquicias from "./components/JuegosFranquicias";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // ✅ Consultas Prisma directas en server component
  
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

  // 🔹 Formatear datos para los componentes
  const games = gamesRaw.map((g) => ({
    id: g.id_jue,
    name: g.nom_jue,
    img: g.img_jue || "/default-game.png",
    offer: g.porc_desc_jue ? `-${g.porc_desc_jue}%` : null,
  }));

  const news: NewsItem[] = newsRaw.map((n) => ({
    id: n.id_not,
    title: n.tit_not,
    imageUrl: n.img_not || "/default-news.png",
    date: n.fec_not.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" }),
    summary: n.res_not || "",
    link: n.url_not || "#",
  }));

  // 🔹 Render del Home
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
      /*
      {/* Juegos + Franquicias */}
      {//<JuegosFranquicias games={games} />}
}
      {/* Carrusel Hardware */}
      <HardwareCarousel />

      {/* Noticias + Próximos Estrenos */}
      <NewsSection newsData={news} />
    </div>
  );
}

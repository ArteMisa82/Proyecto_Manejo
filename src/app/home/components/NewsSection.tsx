// src/app/home/components/NewsSection.tsx
import React from "react";
import NewsCard from "./NewsCard";

export interface NewsItem {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  summary: string;
  link: string;
}
interface NewsSectionProps {
  newsData: NewsItem[];
}
/*
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "SanDisk anuncia una tarjeta de memoria exclusiva y un SSD pensados para sacar el máximo partido de ROG Xbox Ally",
    imageUrl: "home/xbox_noticia.jpg",
    date: "25-09-2025",
    summary: "SanDisk ha presentado una tarjeta de memoria microSD exclusiva para la consola portátil ROG Xbox Ally.",
    link: "https://vandal.elespanol.com/noticia/1350784099/sandisk-anuncia-una-tarjeta-de-memoria-exclusiva-y-un-ssd-pensados-para-sacar-el-maximo-partido-de-rog-xbox-ally",
  },
  {
    id: 2,
    title: "Próximos juegos – Octubre de 2025",
    imageUrl: "home/noticia_juegos.png",
    date: "30-09-2025",
    summary: "En octubre, aventúrate por el espacio con Mario, explora una ciudad repleta de Pokémon, conviértete en una fuerza imparable en el campo de batalla ¡y montones de cosas más!",
    link: "https://www.nintendo.com/es-es/Noticias/2025/Octubre/Proximos-juegos-Octubre-de-2025-2927819.html",
  },
];
*/

export default function NewsSection({newsData}: NewsSectionProps) {
  return (
    <section className="my-10 px-5">
      <h2 className="text-2xl font-bold mb-5 text-white">Noticias y Próximos Estrenos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            date={item.date}
            summary={item.summary}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
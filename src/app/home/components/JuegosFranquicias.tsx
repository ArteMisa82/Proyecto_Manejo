"use client";

import Image from "next/image";

interface Game {
  id: number;
  name: string;
  img: string;
  offer?: string; // texto o porcentaje de oferta (opcional)
}

interface JuegosFranquiciasProps {
  games: Game[];
}

export default function JuegosFranquicias({ games }: JuegosFranquiciasProps) {
  return (
    <section className="my-10 px-5">
      <h2 className="text-2xl font-bold mb-5">Juegos y Franquicias</h2>

      <div
        className="grid grid-cols-3 grid-rows-3 gap-3 md:h-[500px]"
        style={{
          gridTemplateAreas: `
            "a a b"
            "a a c"
            "d e e"
          `,
        }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-800"
            style={{
              gridArea:
                game.id === 1
                  ? "a"
                  : game.id === 2
                  ? "b"
                  : game.id === 3
                  ? "c"
                  : game.id === 4
                  ? "d"
                  : "e",
            }}
          >
            <Image
              src={game.img}
              alt={game.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Etiqueta de oferta (si aplica) */}
            {game.offer && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                {game.offer}
              </span>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <p className="text-white font-semibold">{game.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
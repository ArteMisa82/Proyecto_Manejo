import Image from "next/image";

const games = [
  { id: 1, name: "Juego 1", img: "/games/game1.jpg" },
  { id: 2, name: "Juego 2", img: "/games/game2.jpg" },
];

const news = [
  { id: 1, title: "Noticia 1", img: "/news/news1.jpg", date: "10 Oct", summary: "Resumen..." },
];

const communities = [
  { id: 1, name: "Comunidad A", members: 120 },
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image src="/banner.jpg" alt="Banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Explora los nuevos lanzamientos</h1>
        </div>
      </div>

      {/* Juegos + Franquicias */}
      <section className="my-10 px-5">
        <h2 className="text-2xl font-bold mb-5">Juegos y Franquicias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {games.map((game) => (
            <div key={game.id} className="relative group cursor-pointer">
              <Image src={game.img} alt={game.name} width={300} height={400} className="rounded-lg" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white font-semibold">{game.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Noticias + Próximos Estrenos */}
      <section className="my-10 px-5">
        <h2 className="text-2xl font-bold mb-5">Noticias y Próximos Estrenos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <Image src={item.img} alt={item.title} width={600} height={300} className="object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.date}</p>
                <p className="text-gray-200">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comunidad */}
      <section className="my-10 px-5">
        <h2 className="text-2xl font-bold mb-5">Comunidad</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {communities.map((com) => (
            <div key={com.id} className="bg-gray-700 rounded-lg p-5 hover:bg-gray-600 transition-colors">
              <h3 className="text-white font-bold">{com.name}</h3>
              <p className="text-gray-300">{com.members} miembros</p>
              <button className="mt-2 px-3 py-1 bg-blue-500 rounded text-white hover:bg-blue-600">Unirse</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

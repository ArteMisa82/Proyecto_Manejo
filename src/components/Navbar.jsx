"use client"; // si estás usando hooks o interactividad

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/home/LogoSimple.png" // ruta relativa desde /public
            alt="Logo de la app"
            width={70}
            height={70}
            priority
            className="rounded-xl"
          />
          <span className="text-white text-lg font-bold">GamerHub</span>
        </div>

        {/* Enlaces */}
        <div>
          <a href="/home" className="text-gray-300 hover:text-white mx-2">
            Home
          </a>
          <a href="/juegos/impl" className="text-gray-300 hover:text-white mx-2">
            Juegos
          </a>
          <a href="/hardware/imp" className="text-gray-300 hover:text-white mx-2">
            Hardware
          </a>
        </div>
      </div>
    </nav>
  );
}

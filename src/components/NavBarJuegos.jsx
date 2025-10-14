import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y nombre */}
        <div className="flex items-center !space-x-3">
          <Image
            src="/home/LogoSimple.png"
            alt="Logo de la app"
            width={150}
            height={150}
            priority
            className="rounded-xl !w-[150px] !h-[150px] !max-w-none"
          />
          <span className="text-white text-lg font-bold !text-lg !font-bold">
            GamerHub
          </span>
        </div>

        {/* Enlaces */}
        <div className="flex !space-x-6">
          <a
            href="/home"
            className="text-gray-300 hover:text-white !text-gray-300 !hover:text-white"
          >
            Home
          </a>
          <a
            href="/juegos/impl"
            className="text-gray-300 hover:text-white !text-gray-300 !hover:text-white"
          >
            Juegos
          </a>
          <a
            href="/hardware/imp"
            className="text-gray-300 hover:text-white !text-gray-300 !hover:text-white"
          >
            Hardware
          </a>
        </div>
      </div>
    </nav>
  );
}

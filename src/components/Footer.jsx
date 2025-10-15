import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#171a21] text-gray-400 text-sm mt-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Logo y derechos */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Image
                        src="/home/LogoSimple.png" // ruta relativa desde /public
                        alt="Logo de la app"
                        width={30}
                        height={30}
                        priority
                        className="rounded-xl"
                      />
            <p className="text-gray-300 font-semibold">GamerHub</p>
          </div>
          <p className="text-gray-500 text-xs text-center md:text-right mt-2 md:mt-0">
            © 2025 GamerHub. Todos los derechos reservados.  
            Todos los precios incluyen IVA (donde sea aplicable).
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-wrap justify-center md:justify-between gap-2 text-gray-400 text-xs">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#" className="hover:text-white">Acerca de Nosotros</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Empleo</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Términos de Servicio</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Soporte</a>
          </div>
        </div>

        {/* Iconos sociales */}
        <div className="flex justify-center mt-5 space-x-4">
          <a href="#" className="hover:opacity-80 transition">
            <img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="/icons/x.svg" alt="X" className="h-5 w-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="/icons/discord.svg" alt="Discord" className="h-5 w-5" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="/icons/twitch.svg" alt="Twitch" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

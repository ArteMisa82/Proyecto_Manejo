"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      router.push("/home"); // redirige al Home
    }, 3000); // 3 segundos
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Nombre animado */}
            <motion.h1
              className="text-6xl font-bold mb-6"
              initial={{ y: -50, scale: 0.8, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              🎮 MiAppDeJuegos
            </motion.h1>

            {/* Barra de carga animada */}
            <motion.div
              className="w-40 h-2 bg-gray-700 rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              <motion.div className="h-2 bg-blue-500 w-full" />
            </motion.div>

            {/* Subtexto con fade-in */}
            <motion.p
              className="mt-4 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Cargando...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

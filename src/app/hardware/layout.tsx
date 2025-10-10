// src/app/hardware/layout.tsx
import type { Metadata } from 'next';
import '../globals.css'; // si necesitas estilos globales aquí

export const metadata: Metadata = {
  title: 'Hardware | Juegos App',
  description: 'Sección de hardware y consolas',
};

export default function HardwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // nada de <html> ni <body> aquí
}

// src/app/hardware/imp/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware | Juegos App',
  description: 'Sección de hardware y consolas',
};

export default function HardwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Nada de <html> ni <body> aquí; eso solo en el root layout
  return <>{children}</>;
}

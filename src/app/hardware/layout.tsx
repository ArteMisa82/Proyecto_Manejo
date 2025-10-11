import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware | Plataforma UTA',
  description: 'Sección de hardware y consolas',
};

export default function HardwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🚫 Nada de <html> ni <body> aquí.
  // 🚫 No importes fonts aquí (Inter/Geist) ni globals.css.
  // ✅ Si necesitas estilos, usa Tailwind o un contenedor <div>.
  return <>{children}</>;
}

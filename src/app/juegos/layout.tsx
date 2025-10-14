import type { Metadata } from 'next';
import HomeLayout from '../home/layout';
import TopNav from '@/components/TopNav';

export const metadata: Metadata = {
  title: 'Juegos | Plataforma UTA',
  description: 'Sección de juegos',
};

export default function ImpLayout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      {/* Layout específico de Hardware */}
      <div className="bg-black text-white min-h-screen">
        {/*<NavBar/>*/}
        <main>{children}</main>
      </div>
    </HomeLayout>
  );
}
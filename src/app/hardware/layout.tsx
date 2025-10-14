import type { Metadata } from 'next';
import HomeLayout from '../home/layout';
import TopNav from '@/components/TopNav';

export const metadata: Metadata = {
  title: 'Hardware | Plataforma UTA',
  description: 'Sección de hardware y consolas',
};

export default function ImpLayout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout>
      {/* Layout específico de Hardware */}
      <div className="bg-black text-white min-h-screen">
        {/*<NavBar/>*/}
        <TopNav/>
        <main>{children}</main>
      </div>
    </HomeLayout>
  );
}
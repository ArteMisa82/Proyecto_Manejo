'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href ? 'text-white' : 'text-white/70 hover:text-white';

  return (
    <nav className="w-full bg-[#0b0f19]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-end gap-6">
        <Link href="/hardware/imp" className={isActive('/hardware/imp')}>Hardware</Link>
        <Link href="/hardware/galeria" className={isActive('/hardware/galeria')}>Galería</Link>
      </div>
    </nav>
  );
}
  

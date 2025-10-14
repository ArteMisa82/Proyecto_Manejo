import React from 'react';
import Navbar from '@/components/NavBarJuegos';
import Footer from '@/components/Footer';
import '../../../styles/juegos.css';

type Props = {
  children: React.ReactNode;
};

export default function JuegosLayout({ children }: Props) {
  return (
    <>
	
      <main className="juegos-main mt-4 mb-4 px-6">
        {children}
      </main>
	  
    </>
  );
}

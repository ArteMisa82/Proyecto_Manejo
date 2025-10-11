import React from 'react';
import '../../../components/Navbar';
import '../../../components/Footer';
import '../../../styles/juegos.css';

type Props = {
	children: React.ReactNode;
};

export default function JuegosLayout({ children }: Props) {
	// Simple layout for /juegos/impl route
	return (
		<div className="juegos-root">
			{/* Navbar (if available) */}
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/* @ts-ignore */}
			<div className="nav-placeholder">
				{/* Navbar will be hydrated by the shared Navbar component if present */}
				<React.Suspense fallback={<div />}>{/* Navbar placeholder */}</React.Suspense>
			</div>

			<main className="juegos-main">{children}</main>

			{/* Footer */}
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/* @ts-ignore */}
			<div className="footer-placeholder">
				<React.Suspense fallback={<div />}>{/* Footer placeholder */}</React.Suspense>
			</div>
		</div>
	);
}

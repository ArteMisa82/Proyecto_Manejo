'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../../../styles/juegos.css';

interface Juego {
  id: number;
  titulo: string;
  precioOriginal: number;
  precioOferta: number;
  descuento: number;
  imagen: string;
  destacado: boolean;
  descripcion?: string;
}

const JuegosPage = () => {
  const [juegos] = useState<Juego[]>([
    {
      id: 1,
      titulo: "God of War: Ragnarok",
      precioOriginal: 69.99,
      precioOferta: 39.99,
      descuento: 50,
      imagen: "/imgs/gow.png",
      destacado: true,
      descripcion: "Únete a Kratos y Atreus..."
    },
    {
      id: 2,
      titulo: "Sonic Frontiers",
      precioOriginal: 59.99,
      precioOferta: 34.99,
      descuento: 50,
      imagen: "/imgs/frontiers.jpg",
      destacado: false,
      descripcion: "Conviértete en Sonic..."
    },
    {
      id: 3,
      titulo: "The Legend of Zelda:Tears of The Kingdom",
      precioOriginal: 79.99,
      precioOferta: 49.99,
      descuento: 40,
      imagen: "/imgs/totk.jpg",
      destacado: false,
      descripcion: "En la secuela de The Legend of Zelda..."
    },
    {
      id: 4,
      titulo: "Hollow Knight: Silksong",
      precioOriginal: 6.99,
      precioOferta: 3.99,
      descuento: 40,
      imagen: "/imgs/hollow.png",
      destacado: false,
      descripcion: "Hollow Knight es un extraordinario juego..."
    },
    {
      id: 5,
      titulo: "Sonic Unleashed:PC Port",
      precioOriginal: 29.99,
      precioOferta: 0,
      descuento: 100,
      imagen: "/imgs/unleashed.jpg",
      destacado: false,
      descripcion: "SONIC UNLEASHED LLEGO A PC..."
    }
  ]);

  const [indiceActual, setIndiceActual] = useState(0);
  const [estaCargando, setEstaCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setEstaCargando(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const siguienteJuego = () =>
    setIndiceActual(prev => (prev === juegos.length - 1 ? 0 : prev + 1));
  const anteriorJuego = () =>
    setIndiceActual(prev => (prev === 0 ? juegos.length - 1 : prev - 1));
  const irAlJuego = (index: number) => setIndiceActual(index);

  if (estaCargando) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        <p>Cargando ofertas...</p>
      </div>
    );
  }

  const juegoActual = juegos[indiceActual];

  return (
    <div className="pagina-juegos">
      {/* Header */}
      <header className="header-juegos">
        <div className="contenedor-header">
          <h1 className="titulo-principal">VIDEOJUEGOS</h1>
          <nav className="navegacion">
            <a href="#" className="nav-link">Inicio</a>
            <a href="#" className="nav-link activo">Juegos</a>
            <a href="#" className="nav-link">Ofertas</a>
            <a href="#" className="nav-link">Carrito</a>
          </nav>
        </div>
      </header>

      {/* Carrusel */}
      <section className="ofertas-carrusel">
        <div className="cabecera-ofertas">
          <h2>Juegos</h2>
          <div className="titulo-destacado">
            <span>Ofertas Especiales</span>
          </div>
        </div>

        <div className="contenedor-carrusel">
          <button className="boton-navegacion boton-anterior" onClick={anteriorJuego}>‹</button>

          <div className="carrusel">
            <div className="lista-juegos">
              <div className={`tarjeta-juego ${juegoActual.destacado ? 'destacado' : ''}`}>
                <div className="contenido-juego">
                  <div className="imagen-juego">
                    <Image
                      src={juegoActual.imagen}
                      alt={juegoActual.titulo}
                      width={740}
                      height={360}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
                    />
                    <div className="etiqueta-oferta">-{juegoActual.descuento}%</div>
                    {juegoActual.destacado && <div className="badge-destacado">🔥 DESTACADO</div>}
                  </div>

                  <div className="info-juego">
                    <h3 className="titulo-juego">{juegoActual.titulo}</h3>
                    {juegoActual.descripcion && <p className="descripcion-juego">{juegoActual.descripcion}</p>}
                    <div className="precios">
                      <span className="precio-original">${juegoActual.precioOriginal.toFixed(2)}</span>
                      <span className="precio-oferta">${juegoActual.precioOferta.toFixed(2)}</span>
                    </div>
                    <div className="acciones">
                      <button className="boton-comprar">YA DISPONIBLE</button>
                      <button className="boton-info"><span className="icono-info">ℹ️</span> LO MÁS VENDIDO</button>
                    </div>
                    <div className="tiempo-restante">
                      <span className="texto-oferta">Oferta termina en: 2d 12h 30m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="boton-navegacion boton-siguiente" onClick={siguienteJuego}>›</button>
        </div>

        {/* Indicadores */}
        <div className="indicadores">
          {juegos.map((_, index) => (
            <button
              key={index}
              className={`indicador ${index === indiceActual ? 'activo' : ''}`}
              onClick={() => irAlJuego(index)}
            />
          ))}
        </div>

        {/* Contador de juegos */}
        <div className="contador-juegos" style={{ marginTop: 10 }}>
          <span>{indiceActual + 1} / {juegos.length}</span>
        </div>

        {/* Línea celeste + letrero centrado */}
<div style={{ marginTop: 30, textAlign: 'center' }}>
  {/* Línea celeste */}
  <div style={{
    height: 4,
    backgroundColor: '#00bfff',
    width: '80%',
    margin: '0 auto 20px auto',
    borderRadius: 2
  }}></div>

  {/* Imagen letrero centrada */}
  <Image
    src="/imgs/letrero.png"
    alt="Letrero"
    width={650}
    height={500}
    style={{ display: 'block', margin: '0 auto', objectFit: 'contain' }}
  />
</div>

      </section>

      {/* Footer */}
      <footer className="footer-juegos">
        <div className="contenedor-footer">
          <div className="info-footer">
            <h4>GAME STORE</h4>
            <p>Las mejores ofertas en videojuegos</p>
          </div>
          <div className="enlaces-footer">
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Soporte técnico</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JuegosPage;

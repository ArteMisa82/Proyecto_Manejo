 
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
      descripcion: "Únete a Kratos y Atreus para explorar los míticos nueve reinos en búsqueda de respuestas y aliados en God of War Ragnarok."
    },
    {
      id: 2,
      titulo: "Sonic Frontiers",
      precioOriginal: 59.99,
      precioOferta: 34.99,
      descuento: 50,
      imagen: "/imgs/frontiers.jpg",
      destacado: false,
      descripcion: "Conviértete en Sonic y viaja para desvelar los misterios de una antigua civilización amenazada por hordas de robots."
    },
    {
      id: 3,
      titulo: "The Legend of Zelda:Tears of The Kingdom",
      precioOriginal: 79.99,
      precioOferta: 49.99,
      descuento: 40,
      imagen: "/imgs/totk.jpg",
      destacado: false,
      descripcion: "En la secuela de The Legend of Zelda: Breath of the Wild, seguirás tu propio camino a lo largo y ancho de las inmensas tierras de Hyrule y las extrañas islas que flotan en las alturas. ¿Lograrás dominar el poder que te ofrecen las nuevas habilidades de Link para luchar contra las fuerzas malignas que ponen en peligro el reino?"
    },
    {
      id: 4,
      titulo: "Hollow Knight: Silksong",
      precioOriginal: 6.99,
      precioOferta: 3.99,
      descuento: 40,
      imagen: "/imgs/hollow.png",
      destacado: false,
      descripcion: "Hollow Knight es un extraordinario juego de acción y plataformas en 2D que llega pisando fuerte al prolífico género de los metroidvania."
    },
    {
      id: 5,
      titulo: "Sonic Unleashed:PC Port",
      precioOriginal: 29.99,
      precioOferta: 0,
      descuento: 100,
      imagen: "/imgs/unleashed.jpg",
      destacado: false,
      descripcion: "SONIC UNLEASHED LLEGO A PC !! No de forma oficial pero ya como una aplicación normal para PC. Olvídate de la horrible y tediosa configuración del emulador Xenia y prepárate para jugar Unleashed de la mejor forma en PC."
    }
  ]);

  const [indiceActual, setIndiceActual] = useState(0);
  const [estaCargando, setEstaCargando] = useState(true);

  // Simular carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setEstaCargando(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const siguienteJuego = () => {
    setIndiceActual((prevIndex) => 
      prevIndex === juegos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const anteriorJuego = () => {
    setIndiceActual((prevIndex) => 
      prevIndex === 0 ? juegos.length - 1 : prevIndex - 1
    );
  };

  const irAlJuego = (index: number) => {
    setIndiceActual(index);
  };

  // Carrusel automático
  useEffect(() => {
    if (estaCargando) return;
    
    const intervalo = setInterval(() => {
      siguienteJuego();
    }, 6000);

    return () => clearInterval(intervalo);
  }, [indiceActual, estaCargando]);

  if (estaCargando) {
    return (
      <div className="pagina-carga">
        <div className="cargando">
          <div className="spinner"></div>
          <p>Cargando ofertas...</p>
        </div>
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

      {/* Carrusel Principal */}
      <section className="ofertas-carrusel">
        <div className="cabecera-ofertas">
          <h2>Juegos</h2>
          <div className="titulo-destacado">
            <span>Ofertas Especiales</span>
          </div>
        </div>

        <div className="contenedor-carrusel">
          <button 
            className="boton-navegacion boton-anterior"
            onClick={anteriorJuego}
            aria-label="Juego anterior"
          >
            ‹
          </button>

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
                    {juegoActual.destacado && (
                      <div className="badge-destacado">🔥 DESTACADO</div>
                    )}
                  </div>
                  
                  <div className="info-juego">
                    <h3 className="titulo-juego">{juegoActual.titulo}</h3>
                    
                    {juegoActual.descripcion && (
                      <p className="descripcion-juego">{juegoActual.descripcion}</p>
                    )}
                    
                    <div className="precios">
                      <span className="precio-original">${juegoActual.precioOriginal.toFixed(2)}</span>
                      <span className="precio-oferta">${juegoActual.precioOferta.toFixed(2)}</span>
                    </div>
                    
                    <div className="acciones">
                      <button className="boton-comprar">
                        YA DISPONIBLE
                      </button>
                      <button className="boton-info">
                        <span className="icono-info">ℹ️</span>
                        LO MÁS VENDIDO
                      </button>
                    </div>

                    <div className="tiempo-restante">
                      <span className="texto-oferta">Oferta termina en: 2d 12h 30m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            className="boton-navegacion boton-siguiente"
            onClick={siguienteJuego}
            aria-label="Siguiente juego"
          >
            ›
          </button>
        </div>

        <div className="indicadores">
          {juegos.map((_, index) => (
            <button
              key={index}
              className={`indicador ${index === indiceActual ? 'activo' : ''}`}
              onClick={() => irAlJuego(index)}
              aria-label={`Ver ${juegos[index].titulo}`}
            />
          ))}
        </div>

        <div className="contador-juegos">
          <span>{indiceActual + 1} / {juegos.length}</span>
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
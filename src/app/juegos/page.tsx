 'use client';

import { useState, useEffect } from 'react';
import '../../styles/juegos.css';

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
      titulo: "Football Manager 26",
      precioOriginal: 59.99,
      precioOferta: 29.99,
      descuento: 50,
      imagen: "/images/football-manager.jpg",
      destacado: true,
      descripcion: "El simulador de gestión futbolística más completo"
    },
    {
      id: 2,
      titulo: "Sonic Frontiers",
      precioOriginal: 49.99,
      precioOferta: 24.99,
      descuento: 50,
      imagen: "/images/sonic.jpg",
      destacado: false,
      descripcion: "Nueva aventura de alta velocidad"
    },
    {
      id: 3,
      titulo: "Fitness Trainer Pro",
      precioOriginal: 39.99,
      precioOferta: 19.99,
      descuento: 50,
      imagen: "/images/trainer.jpg",
      destacado: false,
      descripcion: "Tu entrenador personal en casa"
    },
    {
      id: 4,
      titulo: "Ultimate Competition",
      precioOriginal: 44.99,
      precioOferta: 22.49,
      descuento: 50,
      imagen: "/images/competir.jpg",
      destacado: false,
      descripcion: "Compite en torneos globales"
    },
    {
      id: 5,
      titulo: "Game Package XL",
      precioOriginal: 69.99,
      precioOferta: 34.99,
      descuento: 50,
      imagen: "/images/package.jpg",
      destacado: false,
      descripcion: "Colección completa de juegos"
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
                    <div className="nombre-juego-imagen">{juegoActual.titulo}</div>
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
                        <span className="icono-carrito">🛒</span>
                        COMPRAR AHORA
                      </button>
                      <button className="boton-info">
                        <span className="icono-info">ℹ️</span>
                        MÁS INFORMACIÓN
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

      {/* Sección de Todos los Juegos */}
      <section className="todos-juegos">
        <div className="cabecera-todos">
          <h3>Todos los Juegos en Oferta</h3>
          <p>No te pierdas estas increíbles ofertas</p>
        </div>

        <div className="grid-juegos">
          {juegos.map((juego, index) => (
            <div 
              key={juego.id} 
              className={`card-juego ${juego.destacado ? 'card-destacado' : ''} ${index === indiceActual ? 'activo' : ''}`}
              onClick={() => irAlJuego(index)}
            >
              <div className="card-imagen">
                <div className="card-nombre">{juego.titulo}</div>
                <div className="card-oferta">-{juego.descuento}%</div>
              </div>
              <div className="card-info">
                <h4>{juego.titulo}</h4>
                <div className="card-precios">
                  <span className="card-precio-original">${juego.precioOriginal.toFixed(2)}</span>
                  <span className="card-precio-oferta">${juego.precioOferta.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
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
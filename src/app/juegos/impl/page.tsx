'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../../../styles/juegos.css';

interface Categoria {
  id_cat: number;
  nom_cat: string;
}

interface Franquicia {
  id_fra: number;
  nom_fra: string;
  des_fra: string;
}

interface Juego {
  id_jue: number;
  nom_jue: string;
  des_jue: string;
  pre_ori_jue: string;
  pre_ofe_jue: string;
  porc_desc_jue: string;
  img_jue: string;
  categorias: Categoria;
  franquicias: Franquicia;
}

const JuegosPage = () => {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [estaCargando, setEstaCargando] = useState(true);

  // Franquicias seccion
  const [franquiciaSEGA, setFranquiciaSEGA] = useState<Juego[]>([]);
  const [franquiciaNintendo, setFranquiciaNintendo] = useState<Juego[]>([]);
  const [franquiciaPS, setFranquiciaPS] = useState<Juego[]>([]);

  const [franIndex, setFranIndex] = useState(0);
  const [nintendoIndex, setNintendoIndex] = useState(0);
  const [psIndex, setPsIndex] = useState(0);

  const [editingCats, setEditingCats] = useState(false);
  const [tempCats, setTempCats] = useState<string[]>([]);

  const [nintendoEditing, setNintendoEditing] = useState(false);
  const [nintendoTempCats, setNintendoTempCats] = useState<string[]>([]);

  const [psEditing, setPsEditing] = useState(false);
  const [psTempCats, setPsTempCats] = useState<string[]>([]);

  // 🔹 Cargar juegos desde API
  useEffect(() => {
    const fetchJuegos = async () => {
      try {
        const res = await fetch('/api/juegos');
        const data: Juego[] = await res.json();
        setJuegos(data);

        // Separar por franquicia
        setFranquiciaSEGA(data.filter(j => j.franquicias.nom_fra.toLowerCase() === 'sega'));
        setFranquiciaNintendo(data.filter(j => ['mario', 'nintendo'].includes(j.franquicias.nom_fra.toLowerCase())));
        setFranquiciaPS(data.filter(j => ['playstation', 'final fantasy'].includes(j.franquicias.nom_fra.toLowerCase())));
      } catch (error) {
        console.error('Error al obtener juegos:', error);
      } finally {
        setEstaCargando(false);
      }
    };
    fetchJuegos();
  }, []);

  // Carrusel principal
  const siguienteJuego = () => setIndiceActual(prev => prev === juegos.length - 1 ? 0 : prev + 1);
  const anteriorJuego = () => setIndiceActual(prev => prev === 0 ? juegos.length - 1 : prev - 1);
  const irAlJuego = (index: number) => setIndiceActual(index);

  useEffect(() => {
    if (estaCargando || juegos.length === 0) return;
    const interval = setInterval(siguienteJuego, 6000);
    return () => clearInterval(interval);
  }, [indiceActual, juegos, estaCargando]);

  // Auto-advance Franquicias
  useEffect(() => {
    if (estaCargando) return;
    const interval = setInterval(() => setFranIndex(prev => franquiciaSEGA.length === 0 ? 0 : prev === franquiciaSEGA.length - 1 ? 0 : prev + 1), 7000);
    return () => clearInterval(interval);
  }, [franIndex, estaCargando, franquiciaSEGA.length]);

  useEffect(() => {
    if (estaCargando) return;
    const interval = setInterval(() => setNintendoIndex(prev => franquiciaNintendo.length === 0 ? 0 : prev === franquiciaNintendo.length - 1 ? 0 : prev + 1), 7000);
    return () => clearInterval(interval);
  }, [nintendoIndex, estaCargando, franquiciaNintendo.length]);

  useEffect(() => {
    if (estaCargando) return;
    const interval = setInterval(() => setPsIndex(prev => franquiciaPS.length === 0 ? 0 : prev === franquiciaPS.length - 1 ? 0 : prev + 1), 7000);
    return () => clearInterval(interval);
  }, [psIndex, estaCargando, franquiciaPS.length]);

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

  if (juegos.length === 0) {
    return <p>No hay juegos disponibles.</p>;
  }

  const juegoActual = juegos[indiceActual];

  const renderFranquicia = (
    franJuegos: Juego[],
    index: number,
    setIndex: (i: number) => void,
    editing: boolean,
    setEditing: any,
    tempCats: string[],
    setTempCats: any,
    logo: string,
    trailer: string
  ) => {
    if (franJuegos.length === 0) return null;
    const juego = franJuegos[index];

    return (
      <section className="franquicias-seccion">
        <div className="contenedor-franquicia">
          <div className="fran-header">
            <Image src={logo} alt={juego.franquicias.nom_fra} width={250} height={108} />
          </div>
          <p className="subtitulo">Trailer destacado</p>
          <div className="trailer-wrapper">
            <iframe
              width="100%"
              height="520"
              src={trailer}
              title={`${juego.franquicias.nom_fra} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="fran-hero">
            <button className="hero-nav hero-prev" onClick={() => setIndex(index === 0 ? franJuegos.length - 1 : index - 1)}>‹</button>

            <div className="hero-slide">
              <div className="hero-media">
                <Image
                  src={juego.img_jue}
                  alt={juego.nom_jue}
                  width={1400}
                  height={560}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="hero-overlay">
                  <div className="hero-top">
                    <div>
                      <span className="badge-hero">YA DISPONIBLE</span>
                      <h3 className="hero-title">{juego.nom_jue}</h3>
                      {juego.des_jue && <p className="hero-desc">{juego.des_jue}</p>}
                    </div>
                    <div>
                      <button
                        className="cat-edit-toggle"
                        onClick={() => { setTempCats([juego.categorias.nom_cat]); setEditing(true); }}
                        aria-label="Editar categorías"
                      ></button>
                    </div>
                  </div>

                  <div className="hero-bottom">
                    {editing ? (
                      <div className="cat-edit-panel">
                        <div className="cat-edit-list">
                          {tempCats.map((cat, ci) => (
                            <div className="cat-edit-row" key={ci}>
                              <input
                                value={cat}
                                onChange={(e) => setTempCats((prev: any) => {
                                  const copy = [...prev];
                                  copy[ci] = e.target.value;
                                  return copy;
                                })}
                              />
                              <button className="cat-remove" onClick={() => setTempCats((prev: any[]) => prev.filter((_, ix) => ix !== ci))}>✖</button>
                            </div>
                          ))}
                        </div>
                        <div className="cat-edit-actions">
                          <button className="cat-add" onClick={() => setTempCats((prev: any) => [...prev, ''])}>+ Añadir</button>
                          <button className="cat-save" onClick={() => setEditing(false)}>Guardar</button>
                          <button className="cat-cancel" onClick={() => setEditing(false)}>Cancelar</button>
                        </div>
                      </div>
                    ) : (
                      <div className="hero-categories">
                        {tempCats.map((cat, i) => <button key={i} className="cat-btn">{cat}</button>)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button className="hero-nav hero-next" onClick={() => setIndex(index === franJuegos.length - 1 ? 0 : index + 1)}>›</button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="pagina-juegos">
      {/* Header */}
      {/*<header className="header-juegos">
        <div className="contenedor-header">
          <h1 className="titulo-principal">VIDEOJUEGOS</h1>
          <nav className="navegacion">
            <a href="#" className="nav-link">Inicio</a>
            <a href="#" className="nav-link activo">Juegos</a>
            <a href="#" className="nav-link">Ofertas</a>
          </nav>
        </div>
      </header>*/}

      {/* Carrusel Principal */}
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
              <div className={`tarjeta-juego ${juegoActual.porc_desc_jue !== '0' ? 'destacado' : ''}`}>
                <div className="contenido-juego">
                  <div className="imagen-juego">
                    <Image
                      src={juegoActual.img_jue}
                      alt={juegoActual.nom_jue}
                      width={740}
                      height={360}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
                    />
                    <div className="etiqueta-oferta">-{juegoActual.porc_desc_jue}%</div>
                    <div className="badge-destacado">{juegoActual.franquicias.nom_fra}</div>
                  </div>

                  <div className="info-juego">
                    <h3 className="titulo-juego">{juegoActual.nom_jue}</h3>
                    <p className="descripcion-juego">{juegoActual.des_jue}</p>
                    <div className="precios">
                      <span className="precio-original">${parseFloat(juegoActual.pre_ori_jue).toFixed(2)}</span>
                      <span className="precio-oferta">${parseFloat(juegoActual.pre_ofe_jue).toFixed(2)}</span>
                    </div>
                    <div className="acciones">
                      <button className="boton-comprar">YA DISPONIBLE</button>
                      <button className="boton-info">{juegoActual.categorias.nom_cat}</button>
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

        <div className="indicadores">
          {juegos.map((_, index) => (
            <button
              key={index}
              className={`indicador ${index === indiceActual ? 'activo' : ''}`}
              onClick={() => irAlJuego(index)}
            />
          ))}
        </div>

        <div className="contador-juegos">
          <span>{indiceActual + 1} / {juegos.length}</span>
        </div>
      </section>

      {/* Franquicias */}
      {renderFranquicia(franquiciaSEGA, franIndex, setFranIndex, editingCats, setEditingCats, tempCats, setTempCats, '/imgs/SEGAA.png', 'https://www.youtube.com/embed/3_xAuG3JfIg')}
      {renderFranquicia(franquiciaNintendo, nintendoIndex, setNintendoIndex, nintendoEditing, setNintendoEditing, nintendoTempCats, setNintendoTempCats, '/imgs/nintendo.png', 'https://www.youtube.com/embed/uHGShqcAHlQ')}
      {renderFranquicia(franquiciaPS, psIndex, setPsIndex, psEditing, setPsEditing, psTempCats, setPsTempCats, '/imgs/psss.png', 'https://www.youtube.com/embed/vtFhDrMIZjE')}

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

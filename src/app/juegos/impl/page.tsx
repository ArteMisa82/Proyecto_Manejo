 
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
      imagen: "/imgs/gow.jpg",
      destacado: true,
      descripcion: "Únete a Kratos y Atreus para explorar los míticos nueve reinos en búsqueda de respuestas y aliados en God of War Ragnarok."
    },
    {
      id: 2,
      titulo: "Sonic Frontiers",
      precioOriginal: 59.99,
      precioOferta: 34.99,
      descuento: 50,
      imagen: "/imgs/sonf.avif",
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

  // Franquicia SEGA - datos y estado para el carrusel
  interface FranJuego {
    id: number;
    titulo: string;
    imagen: string;
    descripcion?: string;
    categories: string[];
  }
  const [franquiciaJuegos, setFranquiciaJuegos] = useState<FranJuego[]>([
    { id: 101, titulo: 'Sonic Racing Crossworlds', imagen: '/imgs/crossworlds.avif', descripcion: 'Carreras a gran velocidad con pistas inspiradas en clásicos y nuevos entornos.', categories: ['Acción', 'Carreras'] },
    { id: 102, titulo: 'Yakuza Kiwami 3', imagen: '/imgs/yakuza3.jpg', descripcion: 'Combates intensos y narrativa cinematográfica en la entrega más reciente.', categories: ['Aventura'] },
    { id: 103, titulo: 'Hatsune Miku: Project Diva Mega Mix+', imagen: '/imgs/mikuuu.jpg', descripcion: 'Ritmos frenéticos y canciones icónicas en un título de música para fans.', categories: ['Ritmo', 'Música'] },
    { id: 104, titulo: 'Sonic x Shadow Generations ', imagen: '/imgs/sndw.png', descripcion: 'Un crossover con niveles veloces y enfrentamientos épicos.', categories: ['Acción'] }
  ]);

  // Estado para editar categorías por juego (SEGA)
  const [editingCats, setEditingCats] = useState(false);
  const [tempCats, setTempCats] = useState<string[]>([]);

  const [franIndex, setFranIndex] = useState<number>(0);

  // Auto-advance para los heroes (SEGA, NINTENDO, PLAYSTATION)
  useEffect(() => {
    if (estaCargando) return;
    const intervalo = setInterval(() => {
      setFranIndex(prev => prev === franquiciaJuegos.length - 1 ? 0 : prev + 1);
    }, 7000);
    return () => clearInterval(intervalo);
  }, [franIndex, estaCargando, franquiciaJuegos.length]);

  // --- Nintendo section state ---
  const [nintendoJuegos, setNintendoJuegos] = useState<FranJuego[]>([
    { id: 201, titulo: 'The Legend of Zelda: Tears of the Kingdom', imagen: '/imgs/lgtotk.png', descripcion: 'Aventuras en Hyrule con nuevas habilidades.', categories: ['Aventura', 'Exploración'] },
    { id: 202, titulo: 'Mario Kart 8 Deluxe', imagen: '/imgs/mario.jpg', descripcion: 'Carreras clásicas con personajes icónicos.', categories: ['Carreras'] }
  ]);
  const [nintendoIndex, setNintendoIndex] = useState<number>(0);
  const [nintendoEditing, setNintendoEditing] = useState(false);
  const [nintendoTempCats, setNintendoTempCats] = useState<string[]>([]);

  // --- PlayStation section state ---
  const [psJuegos, setPsJuegos] = useState<FranJuego[]>([
    { id: 301, titulo: 'God of War: Ragnarok', imagen: '/imgs/gow.jpg', descripcion: 'Únete a Kratos y Atreus para explorar los míticos nueve reinos en búsqueda de respuestas y aliados en God of War Ragnarok.', categories: ['Acción'] },
  { id: 302, titulo: 'Ghost of Yotei', imagen: '/imgs/ghost.webp', descripcion: 'Ambientado unos 300 años después del aclamado Ghost of Tsushima, Ghost of Yōtei es una experiencia independiente que transcurre en el siglo XVII en el Japón rural.', categories: ['Aventura', 'Acción'] },
    { id: 303, titulo: 'Little NightmaresIII', imagen: '/imgs/little.jpg', descripcion: 'Little Nightmares III es una perturbadora aventura atmosférica en la que los grandes amigos Low y Alone, que quieren huir de la Nada', categories: ['Aventura', 'Acción'] },
    { id: 304, titulo: "Battlefield 6", imagen: '/imgs/battle.jpg', descripcion: 'La experiencia bélica definitiva. Lucha en intensos combates de infantería, atraviesa los cielos en combate aéreo, destruye tu entorno y consigue una arma letal', categories: ['Acción', 'Superhéroes'] }
  ]);
  const [psIndex, setPsIndex] = useState<number>(0);
  const [psEditing, setPsEditing] = useState(false);
  const [psTempCats, setPsTempCats] = useState<string[]>([]);

  // Simular carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setEstaCargando(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance Nintendo
  useEffect(() => {
    if (estaCargando) return;
    const intervalo = setInterval(() => {
      setNintendoIndex(prev => prev === nintendoJuegos.length - 1 ? 0 : prev + 1);
    }, 7000);
    return () => clearInterval(intervalo);
  }, [nintendoIndex, estaCargando, nintendoJuegos.length]);

  // Auto-advance PlayStation
  useEffect(() => {
    if (estaCargando) return;
    const intervalo = setInterval(() => {
      setPsIndex(prev => prev === psJuegos.length - 1 ? 0 : prev + 1);
    }, 7000);
    return () => clearInterval(intervalo);
  }, [psIndex, estaCargando, psJuegos.length]);

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

      {/* Sección de Franquicias - SEGA */}
      <section className="franquicias-seccion">
        <div className="contenedor-franquicia">
          <div className="fran-header">
            <Image src="/imgs/SEGAA.png" alt="SEGA" width={200} height={98} />
          </div>
          <p className="subtitulo">Trailer destacado</p>

          <div className="trailer-wrapper">
            {/* Embed de YouTube - sustituye VIDEO_ID por el id real si lo tienes */}
            <iframe
              
              width="100%"
              height="620"
              src="https://www.youtube.com/embed/3_xAuG3JfIg"
              title="SEGA Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="fran-hero">
            <button className="hero-nav hero-prev" onClick={() => setFranIndex(prev => prev === 0 ? franquiciaJuegos.length - 1 : prev - 1)}>‹</button>

            <div className="hero-slide">
              {franquiciaJuegos[franIndex] && (
                <div className="hero-media">
                  <Image
                    src={franquiciaJuegos[franIndex].imagen}
                    alt={franquiciaJuegos[franIndex].titulo}
                    width={1400}
                    height={560}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="hero-overlay">
                    <div className="hero-top">
                      <div>
                        <span className="badge-hero">YA DISPONIBLE</span>
                        <h3 className="hero-title">{franquiciaJuegos[franIndex].titulo}</h3>
                        {franquiciaJuegos[franIndex].descripcion && (
                          <p className="hero-desc">{franquiciaJuegos[franIndex].descripcion}</p>
                        )}
                      </div>
                      <div>
                        <button
                          className="cat-edit-toggle"
                          onClick={() => {
                            // iniciar edición con copia de las categorías actuales
                            setTempCats(franquiciaJuegos[franIndex].categories.slice());
                            setEditingCats(true);
                          }}
                          aria-label="Editar categorías"
                        ></button>
                      </div>
                    </div>

                    <div className="hero-bottom">
                      {editingCats ? (
                        <div className="cat-edit-panel">
                          <div className="cat-edit-list">
                            {tempCats.map((cat, ci) => (
                              <div className="cat-edit-row" key={ci}>
                                <input
                                  value={cat}
                                  onChange={(e) => {
                                    const v = e.target.value;
                                    setTempCats(prev => {
                                      const copy = [...prev];
                                      copy[ci] = v;
                                      return copy;
                                    });
                                  }}
                                />
                                <button className="cat-remove" onClick={() => {
                                  setTempCats(prev => prev.filter((_, ix) => ix !== ci));
                                }}>✖</button>
                              </div>
                            ))}
                          </div>
                          <div className="cat-edit-actions">
                            <button className="cat-add" onClick={() => setTempCats(prev => [...prev, ''])}>+ Añadir</button>
                            <button className="cat-save" onClick={() => {
                              // guardar cambios en el juego actual
                              setFranquiciaJuegos(prev => prev.map((g, i) => i === franIndex ? { ...g, categories: tempCats.filter(t => t.trim() !== '') } : g));
                              setEditingCats(false);
                            }}>Guardar</button>
                            <button className="cat-cancel" onClick={() => setEditingCats(false)}>Cancelar</button>
                          </div>
                        </div>
                      ) : (
                        <div className="hero-categories">
                          {franquiciaJuegos[franIndex].categories.map((cat, i) => (
                            <button key={i} className="cat-btn">{cat}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="hero-nav hero-next" onClick={() => setFranIndex(prev => prev === franquiciaJuegos.length - 1 ? 0 : prev + 1)}>›</button>
          </div>

          
        </div>
      </section>

      {/* Sección de Franquicias - NINTENDO */}
      <section className="franquicias-seccion">
        <div className="contenedor-franquicia">
          <div className="fran-header">
            <Image src="/imgs/nintendo.png" alt="Nintendo" width={250} height={108} />
          </div>
          <p className="subtitulo">Trailer destacado</p>

          <div className="trailer-wrapper">
            <iframe
              width="100%"
              height="520"
              src="https://www.youtube.com/embed/uHGShqcAHlQ"
              title="Nintendo Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="fran-hero">
            <button className="hero-nav hero-prev" onClick={() => setNintendoIndex(prev => prev === 0 ? nintendoJuegos.length - 1 : prev - 1)}>‹</button>

            <div className="hero-slide">
              {nintendoJuegos[nintendoIndex] && (
                <div className="hero-media">
                  <Image
                    src={nintendoJuegos[nintendoIndex].imagen}
                    alt={nintendoJuegos[nintendoIndex].titulo}
                    width={1400}
                    height={560}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="hero-overlay">
                    <div className="hero-top">
                      <div>
                        <span className="badge-hero">YA DISPONIBLE</span>
                        <h3 className="hero-title">{nintendoJuegos[nintendoIndex].titulo}</h3>
                        {nintendoJuegos[nintendoIndex].descripcion && (
                          <p className="hero-desc">{nintendoJuegos[nintendoIndex].descripcion}</p>
                        )}
                      </div>
                      <div>
                        <button
                          className="cat-edit-toggle"
                          onClick={() => {
                            setNintendoTempCats(nintendoJuegos[nintendoIndex].categories.slice());
                            setNintendoEditing(true);
                          }}
                          aria-label="Editar categorías"
                        ></button>
                      </div>
                    </div>

                    <div className="hero-bottom">
                      {nintendoEditing ? (
                        <div className="cat-edit-panel">
                          <div className="cat-edit-list">
                            {nintendoTempCats.map((cat, ci) => (
                              <div className="cat-edit-row" key={ci}>
                                <input
                                  value={cat}
                                  onChange={(e) => {
                                    const v = e.target.value;
                                    setNintendoTempCats(prev => {
                                      const copy = [...prev];
                                      copy[ci] = v;
                                      return copy;
                                    });
                                  }}
                                />
                                <button className="cat-remove" onClick={() => setNintendoTempCats(prev => prev.filter((_, ix) => ix !== ci))}>✖</button>
                              </div>
                            ))}
                          </div>
                          <div className="cat-edit-actions">
                            <button className="cat-add" onClick={() => setNintendoTempCats(prev => [...prev, ''])}>+ Añadir</button>
                            <button className="cat-save" onClick={() => {
                              setNintendoJuegos(prev => prev.map((g, i) => i === nintendoIndex ? { ...g, categories: nintendoTempCats.filter(t => t.trim() !== '') } : g));
                              setNintendoEditing(false);
                            }}>Guardar</button>
                            <button className="cat-cancel" onClick={() => setNintendoEditing(false)}>Cancelar</button>
                          </div>
                        </div>
                      ) : (
                        <div className="hero-categories">
                          {nintendoJuegos[nintendoIndex].categories.map((cat, i) => (
                            <button key={i} className="cat-btn">{cat}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="hero-nav hero-next" onClick={() => setNintendoIndex(prev => prev === nintendoJuegos.length - 1 ? 0 : prev + 1)}>›</button>
          </div>

          
        </div>
      </section>

      {/* Sección de Franquicias - PLAYSTATION */}
      <section className="franquicias-seccion">
        <div className="contenedor-franquicia">
          <div className="fran-header">
            <Image src="/imgs/psss.png" alt="PlayStation" width={200} height={98} />
          </div>
          <p className="subtitulo">Trailer destacado</p>

          <div className="trailer-wrapper">
            <iframe
              width="100%"
              height="520"
              src="https://www.youtube.com/embed/vtFhDrMIZjE"
              title="PlayStation Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="fran-hero">
            <button className="hero-nav hero-prev" onClick={() => setPsIndex(prev => prev === 0 ? psJuegos.length - 1 : prev - 1)}>‹</button>

            <div className="hero-slide">
              {psJuegos[psIndex] && (
                <div className="hero-media">
                  <Image
                    src={psJuegos[psIndex].imagen}
                    alt={psJuegos[psIndex].titulo}
                    width={1400}
                    height={560}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="hero-overlay">
                    <div className="hero-top">
                      <div>
                        <span className="badge-hero">YA DISPONIBLE</span>
                        <h3 className="hero-title">{psJuegos[psIndex].titulo}</h3>
                        {psJuegos[psIndex].descripcion && (
                          <p className="hero-desc">{psJuegos[psIndex].descripcion}</p>
                        )}
                      </div>
                      <div>
                        <button
                          className="cat-edit-toggle"
                          onClick={() => {
                            setPsTempCats(psJuegos[psIndex].categories.slice());
                            setPsEditing(true);
                          }}
                          aria-label="Editar categorías"
                        ></button>
                      </div>
                    </div>

                    <div className="hero-bottom">
                      {psEditing ? (
                        <div className="cat-edit-panel">
                          <div className="cat-edit-list">
                            {psTempCats.map((cat, ci) => (
                              <div className="cat-edit-row" key={ci}>
                                <input
                                  value={cat}
                                  onChange={(e) => {
                                    const v = e.target.value;
                                    setPsTempCats(prev => {
                                      const copy = [...prev];
                                      copy[ci] = v;
                                      return copy;
                                    });
                                  }}
                                />
                                <button className="cat-remove" onClick={() => setPsTempCats(prev => prev.filter((_, ix) => ix !== ci))}>✖</button>
                              </div>
                            ))}
                          </div>
                          <div className="cat-edit-actions">
                            <button className="cat-add" onClick={() => setPsTempCats(prev => [...prev, ''])}>+ Añadir</button>
                            <button className="cat-save" onClick={() => {
                              setPsJuegos(prev => prev.map((g, i) => i === psIndex ? { ...g, categories: psTempCats.filter(t => t.trim() !== '') } : g));
                              setPsEditing(false);
                            }}>Guardar</button>
                            <button className="cat-cancel" onClick={() => setPsEditing(false)}>Cancelar</button>
                          </div>
                        </div>
                      ) : (
                        <div className="hero-categories">
                          {psJuegos[psIndex].categories.map((cat, i) => (
                            <button key={i} className="cat-btn">{cat}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="hero-nav hero-next" onClick={() => setPsIndex(prev => prev === psJuegos.length - 1 ? 0 : prev + 1)}>›</button>
          </div>

          
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
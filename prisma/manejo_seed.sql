--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias (
    id_cat integer NOT NULL,
    nom_cat character varying(50) NOT NULL
);


ALTER TABLE public.categorias OWNER TO postgres;

--
-- Name: categorias_id_cat_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categorias_id_cat_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categorias_id_cat_seq OWNER TO postgres;

--
-- Name: categorias_id_cat_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categorias_id_cat_seq OWNED BY public.categorias.id_cat;


--
-- Name: franquicias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.franquicias (
    id_fra integer NOT NULL,
    nom_fra character varying(50) NOT NULL,
    des_fra character varying(255)
);


ALTER TABLE public.franquicias OWNER TO postgres;

--
-- Name: franquicias_id_fra_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.franquicias_id_fra_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.franquicias_id_fra_seq OWNER TO postgres;

--
-- Name: franquicias_id_fra_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.franquicias_id_fra_seq OWNED BY public.franquicias.id_fra;


--
-- Name: hardware; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hardware (
    id_har integer NOT NULL,
    cod_har character varying(50) NOT NULL,
    nom_har character varying(100) NOT NULL,
    tipo_har character varying(50),
    des_har character varying(255),
    img_har character varying(255),
    url_har character varying(255),
    specs_har character varying(255),
    id_mar integer
);


ALTER TABLE public.hardware OWNER TO postgres;

--
-- Name: hardware_id_har_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hardware_id_har_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.hardware_id_har_seq OWNER TO postgres;

--
-- Name: hardware_id_har_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hardware_id_har_seq OWNED BY public.hardware.id_har;


--
-- Name: juegos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.juegos (
    id_jue integer NOT NULL,
    nom_jue character varying(100) NOT NULL,
    des_jue character varying(255) NOT NULL,
    pre_ori_jue numeric(10,2),
    pre_ofe_jue numeric(10,2),
    porc_desc_jue numeric(5,2),
    img_jue character varying(255),
    id_fra integer,
    id_cat integer
);


ALTER TABLE public.juegos OWNER TO postgres;

--
-- Name: juegos_id_jue_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.juegos_id_jue_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.juegos_id_jue_seq OWNER TO postgres;

--
-- Name: juegos_id_jue_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.juegos_id_jue_seq OWNED BY public.juegos.id_jue;


--
-- Name: marcas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.marcas (
    id_mar integer NOT NULL,
    nom_mar character varying(50) NOT NULL,
    des_mar character varying(255)
);


ALTER TABLE public.marcas OWNER TO postgres;

--
-- Name: marcas_id_mar_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.marcas_id_mar_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.marcas_id_mar_seq OWNER TO postgres;

--
-- Name: marcas_id_mar_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.marcas_id_mar_seq OWNED BY public.marcas.id_mar;


--
-- Name: noticias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.noticias (
    id_not integer NOT NULL,
    tit_not character varying(100) NOT NULL,
    fec_not date DEFAULT CURRENT_DATE NOT NULL,
    res_not character varying(255),
    img_not character varying(255),
    url_not character varying(255)
);


ALTER TABLE public.noticias OWNER TO postgres;

--
-- Name: noticias_id_not_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.noticias_id_not_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.noticias_id_not_seq OWNER TO postgres;

--
-- Name: noticias_id_not_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.noticias_id_not_seq OWNED BY public.noticias.id_not;


--
-- Name: categorias id_cat; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id_cat SET DEFAULT nextval('public.categorias_id_cat_seq'::regclass);


--
-- Name: franquicias id_fra; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.franquicias ALTER COLUMN id_fra SET DEFAULT nextval('public.franquicias_id_fra_seq'::regclass);


--
-- Name: hardware id_har; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hardware ALTER COLUMN id_har SET DEFAULT nextval('public.hardware_id_har_seq'::regclass);


--
-- Name: juegos id_jue; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.juegos ALTER COLUMN id_jue SET DEFAULT nextval('public.juegos_id_jue_seq'::regclass);


--
-- Name: marcas id_mar; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marcas ALTER COLUMN id_mar SET DEFAULT nextval('public.marcas_id_mar_seq'::regclass);


--
-- Name: noticias id_not; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.noticias ALTER COLUMN id_not SET DEFAULT nextval('public.noticias_id_not_seq'::regclass);


--
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categorias (id_cat, nom_cat) FROM stdin;
1	Acción
2	Aventura
3	RPG
4	Deportes
5	Exploración
6	Carreras
7	Ritmo
8	Música
9	Superhéroes
\.


--
-- Data for Name: franquicias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.franquicias (id_fra, nom_fra, des_fra) FROM stdin;
1	Assassin's Creed	Serie de juegos de acción y aventura.
2	Mario	Franquicia clásica de Nintendo.
3	Final Fantasy	Juegos de rol épicos.
4	FIFA	Juegos de fútbol.
5	SEGA	Franquicia de videojuegos SEGA.
6	PlayStation	Juegos exclusivos de consolas PlayStation.
\.


--
-- Data for Name: hardware; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hardware (id_har, cod_har, nom_har, tipo_har, des_har, img_har, url_har, specs_har, id_mar) FROM stdin;
1	switch2	Nintendo Switch 2	Nuevo	120Hz, mejor autonomía y rendimiento superior.	/imghardware/switch2.jpg	/hardware/switch2	Pantalla 7.5” · 120Hz | 512GB almacenamiento | Wi-Fi 6 · BT 5.3	1
2	switch_oled	Nintendo Switch OLED	Destacado	Pantalla OLED de 7” y audio mejorado.	/imghardware/switch_oled.jpg	/hardware/switch-oled	Pantalla OLED 7” | 64GB internos | Dock con LAN	1
3	3ds	Nintendo 3DS	Clásico	3D sin gafas y catálogo retro portátil.	/imghardware/3ds.jpg	/hardware/3ds	3D sin gafas | Tarjetas SD | Gran catálogo clásico	1
4	PS5	PlayStation 5	Consola	Consola de última generación	/hardware/ps5.png	https://www.playstation.com	8K, 825GB SSD	1
5	XBOXX	Xbox Series X	Consola	Consola de Microsoft	/hardware/xbox.png	https://www.xbox.com	12 Teraflops, 1TB SSD	2
6	SWITCH	Nintendo Switch	Consola	Consola portátil/híbrida	/hardware/switch.png	https://www.nintendo.com	HD, portátil	3
\.


--
-- Data for Name: juegos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.juegos (id_jue, nom_jue, des_jue, pre_ori_jue, pre_ofe_jue, porc_desc_jue, img_jue, id_fra, id_cat) FROM stdin;
1	Assassin's Creed Valhalla	Explora el mundo vikingo	59.99	39.99	33.00	/imgs/ac_valhalla.png	1	1
2	Mario Odyssey	Aventura por mundos increíbles	49.99	44.99	10.00	/imgs/mario_odyssey.png	2	2
3	Final Fantasy XVI	RPG épico de fantasía	69.99	59.99	15.00	/imgs/ff16.webp	3	3
4	FIFA 24	Juega al fútbol con tus equipos favoritos	69.99	49.99	29.00	/imgs/fifa24.jpg	4	4
5	God of War: Ragnarok	Únete a Kratos y Atreus para explorar los míticos nueve reinos	69.99	39.99	50	/imgs/gow.jpg	6	1
6	Sonic Frontiers	Conviértete en Sonic y desvela los misterios de una antigua civilización	59.99	34.99	50	/imgs/sonf.avif	5	1
7	The Legend of Zelda: Tears of The Kingdom	En la secuela de Zelda recorrerás Hyrule y las islas flotantes	79.99	49.99	40	/imgs/totk.jpg	2	2
8	Hollow Knight: Silksong	Hollow Knight es un juego de acción y plataformas en 2D	6.99	3.99	40	/imgs/hollow.png	5	1
9	Sonic Unleashed: PC Port	SONIC UNLEASHED llegó a PC como aplicación normal	29.99	0	100	/imgs/unleashed.jpg	5	1
\.



--
-- Data for Name: marcas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.marcas (id_mar, nom_mar, des_mar) FROM stdin;
1	Nintendo	Fabricante japonés de consolas y videojuegos.
2	Sony	Fabricante de consolas y hardware.
3	Microsoft	Fabricante de consolas y hardware.
4	SEGA	Fabricante japonés de videojuegos y consolas.
\.


--
-- Data for Name: noticias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.noticias (id_not, tit_not, fec_not, res_not, img_not, url_not) FROM stdin;
1	Nuevo lanzamiento de Ghost of Tsushima 2	2025-10-10	Sucker Punch anuncia la secuela esperada.	/news/ghost2.jpg	/noticias/ghost2
2	PlayStation 6 en desarrollo	2025-09-28	Sony confirma detalles del nuevo hardware.	/news/ps6.jpg	/noticias/ps6
3	Lanzamiento de PS5 Pro	2025-10-01	Sony anuncia su nueva consola PS5 Pro.	/news/ps5_pro.png	https://www.playstation.com/ps5-pro
4	Xbox Series Z	2025-09-20	Microsoft sorprende con su nueva consola.	/news/xbox_z.png	https://www.xbox.com
5	Nuevo Mario Kart	2025-10-05	Nintendo lanza el nuevo Mario Kart.	/news/mario_kart.png	https://www.nintendo.com/mario-kart
6	SanDisk anuncia una tarjeta de memoria y un SSD exclusiva para el ROG Xbox Ally	2025-09-25	SanDisk ha presentado una tarjeta de memoria microSD exclusiva para la consola portátil ROG Xbox Ally.	home/xbox_noticia.jpg	https://vandal.elespanol.com/noticia/1350784099/sandisk-anuncia-una-tarjeta-de-memoria-exclusiva-y-un-ssd-pensados-para-sacar-el-maximo-partido-de-rog-xbox-ally
7	Próximos juegos – Octubre de 2025	2025-09-30	En octubre, aventúrate por el espacio con Mario, explora una ciudad repleta de Pokémon, conviértete en una fuerza imparable en el campo de batalla ¡y montones de cosas más!	home/noticia_juegos.png	https://www.nintendo.com/es-es/Noticias/2025/Octubre/Proximos-juegos-Octubre-de-2025-2927819.html
\.


--
-- Name: categorias_id_cat_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categorias_id_cat_seq', 4, true);


--
-- Name: franquicias_id_fra_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.franquicias_id_fra_seq', 4, true);


--
-- Name: hardware_id_har_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hardware_id_har_seq', 6, true);


--
-- Name: juegos_id_jue_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.juegos_id_jue_seq', 4, true);


--
-- Name: marcas_id_mar_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.marcas_id_mar_seq', 4, true);


--
-- Name: noticias_id_not_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.noticias_id_not_seq', 7, true);


--
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_cat);


--
-- Name: franquicias franquicias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.franquicias
    ADD CONSTRAINT franquicias_pkey PRIMARY KEY (id_fra);


--
-- Name: hardware hardware_cod_har_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hardware
    ADD CONSTRAINT hardware_cod_har_key UNIQUE (cod_har);


--
-- Name: hardware hardware_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hardware
    ADD CONSTRAINT hardware_pkey PRIMARY KEY (id_har);


--
-- Name: juegos juegos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.juegos
    ADD CONSTRAINT juegos_pkey PRIMARY KEY (id_jue);


--
-- Name: marcas marcas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marcas
    ADD CONSTRAINT marcas_pkey PRIMARY KEY (id_mar);


--
-- Name: noticias noticias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.noticias
    ADD CONSTRAINT noticias_pkey PRIMARY KEY (id_not);


--
-- Name: hardware hardware_id_mar_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hardware
    ADD CONSTRAINT hardware_id_mar_fkey FOREIGN KEY (id_mar) REFERENCES public.marcas(id_mar);


--
-- Name: juegos juegos_id_cat_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.juegos
    ADD CONSTRAINT juegos_id_cat_fkey FOREIGN KEY (id_cat) REFERENCES public.categorias(id_cat);


--
-- Name: juegos juegos_id_fra_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.juegos
    ADD CONSTRAINT juegos_id_fra_fkey FOREIGN KEY (id_fra) REFERENCES public.franquicias(id_fra);


--
-- PostgreSQL database dump complete
--


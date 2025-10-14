// prisma/seed.ts
import { prisma } from "../src/lib/prisma";

async function main() {
  // Juegos
  await prisma.juegos.createMany({
    data: [
      { nom_jue: "God of War: Ragnarok", des_jue: "Únete a Kratos y Atreus para explorar los míticos nueve reinos.", pre_ori_jue: 69.99, pre_ofe_jue: 39.99, img_jue: "/imgs/gow.jpg" },
      { nom_jue: "Sonic Frontiers", des_jue: "Viaja como Sonic para descubrir una antigua civilización.", pre_ori_jue: 59.99, pre_ofe_jue: 34.99, img_jue: "/imgs/sonf.avif" },
      { nom_jue: "The Legend of Zelda: Tears of The Kingdom", des_jue: "Explora Hyrule y domina nuevas habilidades.", pre_ori_jue: 79.99, pre_ofe_jue: 49.99, img_jue: "/imgs/totk.jpg" },
      { nom_jue: "Hollow Knight: Silksong", des_jue: "Aventura de acción y plataformas en 2D tipo metroidvania.", pre_ori_jue: 6.99, pre_ofe_jue: 3.99, img_jue: "/imgs/hollow.png" },
      { nom_jue: "Sonic Unleashed: PC Port", des_jue: "Versión no oficial de Sonic Unleashed para PC.", pre_ori_jue: 29.99, pre_ofe_jue: 0, img_jue: "/imgs/unleashed.jpg" },
      { nom_jue: "Sonic Racing Crossworlds", des_jue: "Carreras a gran velocidad con pistas clásicas y nuevas.", pre_ori_jue: 49.99, pre_ofe_jue: 29.99, img_jue: "/imgs/crossworlds.avif" },
      { nom_jue: "Yakuza Kiwami 3", des_jue: "Combates intensos y narrativa cinematográfica.", pre_ori_jue: 59.99, pre_ofe_jue: 39.99, img_jue: "/imgs/yakuza3.jpg" },
      { nom_jue: "Hatsune Miku: Project Diva Mega Mix+", des_jue: "Juego de música y ritmo frenético.", pre_ori_jue: 49.99, pre_ofe_jue: 29.99, img_jue: "/imgs/mikuuu.jpg" },
      { nom_jue: "Sonic x Shadow Generations", des_jue: "Crossover con niveles veloces y enfrentamientos épicos.", pre_ori_jue: 39.99, pre_ofe_jue: 19.99, img_jue: "/imgs/sndw.png" },
      { nom_jue: "Mario Kart 8 Deluxe", des_jue: "Carreras clásicas con personajes icónicos.", pre_ori_jue: 59.99, pre_ofe_jue: 39.99, img_jue: "/imgs/mario.jpg" },
      { nom_jue: "Ghost of Yotei", des_jue: "Ambientado 300 años después de Ghost of Tsushima.", pre_ori_jue: 69.99, pre_ofe_jue: 49.99, img_jue: "/imgs/ghost.webp" },
      { nom_jue: "Little Nightmares III", des_jue: "Aventura atmosférica con los personajes Low y Alone.", pre_ori_jue: 29.99, pre_ofe_jue: 19.99, img_jue: "/imgs/little.jpg" },
      { nom_jue: "Battlefield 6", des_jue: "Combate bélico definitivo con acción intensa.", pre_ori_jue: 69.99, pre_ofe_jue: 49.99, img_jue: "/imgs/battle.jpg" },
    ],
  });

  // Marcas
  const marcas = await prisma.marcas.createMany({
    data: [
      { nom_mar: "Sony", des_mar: "Fabricante japonés de productos electrónicos y de entretenimiento, creador de PlayStation." },
      { nom_mar: "Microsoft", des_mar: "Empresa tecnológica estadounidense, creadora de la consola Xbox." },
      { nom_mar: "Nintendo", des_mar: "Compañía japonesa de videojuegos y consolas, creadora de Nintendo Switch." },
      { nom_mar: "NVIDIA", des_mar: "Fabricante líder de tarjetas gráficas y procesadores para gaming y diseño." },
      { nom_mar: "Samsung", des_mar: "Fabricante coreano de monitores y equipos electrónicos de alta gama." },
      { nom_mar: "Redragon", des_mar: "Marca especializada en periféricos y accesorios gamer con iluminación RGB." },
    ],
  });

  // Hardware
  await prisma.hardware.createMany({
    data: [
      { cod_har: "HW-001", nom_har: "PlayStation 5", img_har: "/home/playstation5.jpeg", id_mar: 1 },
      { cod_har: "HW-002", nom_har: "Xbox Series X", img_har: "/home/xboxSerieX.png", id_mar: 2 },
      { cod_har: "HW-003", nom_har: "Nintendo Switch OLED", img_har: "/home/swichtOled.jpg", id_mar: 3 },
      { cod_har: "HW-004", nom_har: "Tarjeta Gráfica RTX 4090", img_har: "/home/tarjetaGrafica.jpg", id_mar: 4 },
      { cod_har: "HW-005", nom_har: "Monitor Curvo 144Hz", img_har: "/home/monitorCurvo.jpeg", id_mar: 5 },
      { cod_har: "HW-006", nom_har: "Set Gamer RGB", img_har: "/home/comboGamer_GT2C.png", id_mar: 6 },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

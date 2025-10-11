// prisma/seed.ts
import { prisma } from "../src/lib/prisma";

async function main() {
  // Juegos
  await prisma.juegos.createMany({
    data: [
      { nom_jue: "Ghost of Tsushima", des_jue: "Aventura samurái", pre_ori_jue: 59.99 },
      { nom_jue: "Battlefield 6", des_jue: "Shooter multijugador", pre_ori_jue: 69.99 },
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

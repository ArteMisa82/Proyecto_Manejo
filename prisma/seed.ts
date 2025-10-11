// prisma/seed.ts
import { prisma } from "../src/lib/prisma";

async function main() {
  await prisma.juegos.createMany({
    data: [
      { nom_jue: "Ghost of Tsushima", des_jue: "Aventura samurái", pre_ori_jue: 59.99 },
      { nom_jue: "Battlefield 6", des_jue: "Shooter multijugador", pre_ori_jue: 69.99 },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

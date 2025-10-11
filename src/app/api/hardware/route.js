import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // asegúrate de tener este helper

export async function GET() {
  try {
    const data = await prisma.hardware.findMany({
      select: {
        id_har: true,
        nom_har: true,
        img_har: true,
        tipo_har: true,
        des_har: true,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al obtener hardware:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

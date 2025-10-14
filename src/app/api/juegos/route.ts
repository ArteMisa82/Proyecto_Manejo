import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.juegos.findMany({
      include: {
        categorias: true,
        franquicias: true,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Error al obtener juegos:", error);
    return NextResponse.json(
      { error: "Error al obtener datos de la base" },
      { status: 500 }
    );
  }
}
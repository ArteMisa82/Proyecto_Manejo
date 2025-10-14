// app/imp/page.tsx (Server Component)

import { prisma } from "@/lib/prisma"; 
import HardwareClientPage from "./HardwareClientPage"; 
import { Metadata } from 'next'; 

// 1. 🛑 DEFINICIÓN DE TIPO FINAL Y COMPLETA
export type HardwareItemFromPrisma = {
    id_har: number;
    cod_har: string; 
    nom_har: string;
    tipo_har: string | null;
    des_har: string | null;
    img_har: string | null;
    url_har: string | null; 
    web_url_har: string | null; // ✅ Incluye el nuevo campo
};

// --- METADATOS ESTÁTICOS ---
export const metadata: Metadata = {
    title: 'Hardware y Equipos - Tu Sitio Web',
    description: 'Explora consolas y accesorios.',
};
// ----------------------------


// 2. ⚡ FUNCIÓN DE FETCHING DE DATOS
async function getHardwareData() {
    // NOTA: Eliminamos 'Promise<HardwareItemFromPrisma[]>' de la firma de la función para evitar el error de casting
    const data = await prisma.hardware.findMany({
        select: {
            id_har: true,
            cod_har: true, 
            nom_har: true,
            tipo_har: true,
            des_har: true,
            img_har: true,
            url_har: true, 
            web_url_har: true, // ✅ Incluida en la consulta
        },
        orderBy: {
            id_har: 'asc',
        },
    });
    
    // Retornamos los datos
    return data;
}


// 3. 🖥️ COMPONENTE PRINCIPAL DE SERVIDOR
export default async function HardwarePage() {
    // Inicializamos con el tipo correcto para TS
    let hardwareItems: HardwareItemFromPrisma[] = [];
    let hasError = false;

    try {
        // Obtenemos los datos y hacemos el casting seguro aquí
        const rawData = await getHardwareData();
        hardwareItems = rawData as HardwareItemFromPrisma[];
    } catch (error) {
        console.error("Error al obtener los datos de hardware:", error);
        hasError = true;
    }

    if (hasError || hardwareItems.length === 0) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center p-8 border border-red-500 rounded-lg">
                    <h1 className="text-2xl font-bold text-red-400">⚠️ Error de Carga ⚠️</h1>
                    <p className="mt-2 text-white/80">
                        No se pudo cargar el hardware. Revise la conexión a la base de datos.
                    </p>
                </div>
            </div>
        );
    }
    
    return <HardwareClientPage serverItems={hardwareItems} />;
}
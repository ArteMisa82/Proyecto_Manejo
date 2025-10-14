// app/hardware/galeria/page.tsx (Server Component)
import { prisma } from "@/lib/prisma"; 
import GaleriaPage from "./GalleryClient"; 

// 💡 EXPORTAMOS EL TIPO DE DATO EXACTO que se necesita
export type HardwareItemFromPrisma = {
    id_har: number;
    nom_har: string;
    tipo_har: string | null;
    img_har: string | null;
    url_har: string | null;
    des_har: string | null; // Aseguramos que la descripción está aquí
};

// Función para obtener los datos
async function getHardwareData(): Promise<HardwareItemFromPrisma[]> {
    const data = await prisma.hardware.findMany({
        select: {
            id_har: true,
            nom_har: true,
            tipo_har: true,
            img_har: true, 
            url_har: true,
            des_har: true, // Aseguramos que el select incluye la descripción
        },
        orderBy: {
            id_har: 'asc',
        },
    });
    // Se asegura de que el resultado coincida con el tipo
    return data as HardwareItemFromPrisma[];
}

// 🛑 Componente de Servidor principal
export default async function HardwareGaleriaPage() {
    try {
        const hardwareItems = await getHardwareData();
        return <GaleriaPage serverItems={hardwareItems} />;
    } catch (error) {
        console.error("Error al obtener los datos de hardware:", error);
        return (
            <div style={{ color: 'white', padding: '20px', textAlign: 'center', backgroundColor: '#333' }}>
                <h1 style={{color: 'red'}}>⚠️ Error de Conexión de Datos ⚠️</h1>
                <p>No se pudo conectar a la base de datos o hubo un error de Prisma. Revise la terminal de Docker.</p>
            </div>
        );
    }
}

// hardware/galeria/page.tsx (Server Component)

import { prisma } from "@/lib/prisma"; 
import GaleriaPage from "./GalleryClient"; 

// Función para obtener los datos
async function getHardwareData() {
    // Obtenemos los campos que GalleryClient necesita
    const data = await prisma.hardware.findMany({
        select: {
            id_har: true,
            nom_har: true,
            tipo_har: true,
            img_har: true, 
            url_har: true,
        },
        orderBy: {
            id_har: 'asc',
        },
    });
    return data;
}

// Componente de Servidor principal
export default async function HardwareGaleriaPage() {
    const hardwareItems = await getHardwareData();
    
    // Pasa los datos como prop 'serverItems'
    return (
        <GaleriaPage serverItems={hardwareItems} />
    );
}

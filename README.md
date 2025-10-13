# 🎮 GameHub – Plataforma Informativa de Videojuegos

**GameHub** es una aplicación web informativa dedicada al mundo gamer. Permite a los usuarios explorar ofertas de juegos, conocer los próximos lanzamientos, mantenerse al día con las noticias más relevantes del sector y descubrir los últimos avances en hardware, incluyendo consolas, monitores, tarjetas gráficas y accesorios para setup.

## 🧰 Tecnologías Utilizadas

### 🖥️ Frontend

- ⚡ **Next.js** – Framework de React para renderizado rápido y eficiente
- 🟦 **TypeScript** – Tipado estático para mayor seguridad y mantenimiento del código
- 💅 **Tailwind CSS** – Diseño moderno, responsive y personalizable
- 🧱 **CSS** – Estilos personalizados y animaciones adicionales

### ⚙️ Backend y Base de Datos

- 🧩 **Prisma ORM** – Mapeo de datos y conexión con la base de datos
- 🐘 **PostgreSQL** – Sistema de gestión de base de datos relacional
- 🐳 **Docker** – Contenerización del entorno para despliegue rápido con un solo comando


## ✨ Características Principales

- 🔥 Consulta de descuentos.
- 🗓️ Visualización de estrenos de videojuegos por fecha.
- 📰 Información actualizada sobre la industria del gaming.
- 💻 Detalles sobre consolas, componentes y periféricos.
- 👤 Conexión con base de datos vía Prisma y PostgreSQL.
- 📦 Despliegue con Docker: ejecución del proyecto en un entorno aislado.


## 🚀 Instalación y Ejecución

1. Clonar el repositorio
```bash 
git clone https://github.com/ArteMisa82/Proyecto_Manejo.git
cd gamehub
```

2. Instalar dependencias
```bash 
npm install
```

3. Configurar el entorno
```bash
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/gamehub"

```

4. Ejecutar la base de datos con Docker
``` bash 
docker-compose up -d
```

5. Correr las migraciones de Prisma
```bash 
npx prisma migrate dev
```

6. Iniciar el servidor de desarrollo
``` bash 
npm run dev
```

## 📸 Capturas del Proyecto

![Home]()

![Juegos](https://imgur.com/a/vABfDTq)

![Hardware](https://imgur.com/a/RMjvoVJ)

## 📌 Requisitos del Sistema

- Node.js v18+
- Docker y Docker Compose
- PostgreSQL v15+ (si no se usa Docker)
- Navegador moderno (Chrome, Edge, Firefox, Safari)

## 🤝 Contribuciones

¿Quieres contribuir al proyecto? ¡Genial!

- Haz un fork del repositorio.
- Crea una rama con tu mejora o corrección (git checkout -b feature/nueva-funcionalidad).
- Realiza los cambios y crea un pull request.
- Espera revisión y aprobación antes del merge.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
Puedes usar, modificar y distribuir el código libremente citando la fuente original.

## 👤 Autor

Desarrollado por [ElJDragon,Jhoana2026,ArteMisa82,BryanGtmk,VK0691,CarloBeja]https://github.com/ArteMisa82/Proyecto_Manejo


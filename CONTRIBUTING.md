# Guia de Contribución

¡Gracias por tu interés en contribuir a este proyecto!
Este documento describe cómo puedes colaborar de manera efectiva y ordenada en el desarrollo de la aplicación informativa de videojuegos.

## Flujo de trabajo (Git & GitFlow)
Este proyecto utiliza GitFlow como metodología para mantener un flujo de desarrollo limpio y organizado:

- **Rama principal (main)** - Contiene la versión estable y lista para producción.
- **Rama de desarrollo (develop)** - Aquí se integran las nuevas funcionalidades antes de pasar a main.
- **Ramas de características (feature/Home)** - Se crean desde develop para desarrollar nuevas funciones.
- **Ramas de corrección (hotfix/conexion)** - Se crean desde main cuando se necesita corregir errores urgentes en producción.
- **Pull Requests (PRs)** - Una vez que completes una función, crea un PR hacia develop.
El código será revisado antes de fusionarse.

## 🚀 Cómo contribuir

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu contribución:
```bash 
git checkout -b feature/nueva-funcionalidad
```
3. Realiza tus cambios asegurándote de seguir las buenas prácticas de código.

4. Haz commits claros y descriptivos:
```bash 
git commit -m "feat: agrega componente de noticias"
```
5. Sube tus cambios:
```bash 
git push origin feature/nueva-funcionalidad
```
6. Abre un Pull Request (PR) hacia la rama develop.

## 🧩 Buenas prácticas

- Usa TypeScript y evita errores de tipado.
- Sigue el estilo de código definido con Prettier y ESLint.
- Nombra ramas y commits usando el formato de conventional de los commits.

- - feat: → nueva funcionalidad

## Pruebas y ejecución local

- Antes de enviar un Pull Request, asegúrate de probar tu código localmente:

```bash 
# Instalar dependencias
npm install

docker-compose up --build

npx prisma generate 

# Ejecutar el entorno de desarrollo
npm run dev
```

## Reportar errores

Si encuentras un bug:
1. Abre un Issue con el título y descripción clara del problema.
2. Explica los pasos para reproducirlo.
3. Incluye capturas de pantalla si es posible.

## 👥 Créditos
Gracias a todos los colaboradores que ayudan a mejorar este proyecto.
Cada contribución cuenta y hace crecer esta aplicación.
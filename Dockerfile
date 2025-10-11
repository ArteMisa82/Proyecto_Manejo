# Usa Node.js 22 (coincide con tu entorno)
FROM node:22

# Crea el directorio de la app
WORKDIR /app

# Copia package.json e instala dependencias
COPY package*.json ./
RUN npm install

# Copia todo el código
COPY . .

# Genera Prisma Client
RUN npx prisma generate

# Expone el puerto de Next.js
EXPOSE 3000

# Comando por defecto (modo desarrollo)
CMD ["npm", "run", "dev"]

# Usa la imagen oficial de Node.js 22 LTS como base
FROM node:22-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si existe) para instalar dependencias primero
COPY package.json package-lock.json* ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Construye la aplicación
RUN npm run build

# Usa una imagen ligera para servir la app en producción
FROM node:22-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /app ./

# Expone el puerto en el que Next.js servirá la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]

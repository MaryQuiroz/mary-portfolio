# Usar una imagen base de Node.js LTS
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer los puertos necesarios (3000 para el servidor Express y 5173 para Vite)
EXPOSE 3000 5173

# Comando para iniciar en modo desarrollo
CMD ["npm", "run", "dev"] 
# Usa la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos al contenedor
COPY . .

# Instala las dependencias (si las hubiera)
RUN npm install

# Expone el puerto que usará el servidor
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "server.js"]
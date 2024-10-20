# Düşük boyutlu Alpine imajını kullan
FROM node:alpine

# Uygulama dosyalarını container içine kopyala
WORKDIR /app
COPY package*.json ./
COPY src/ ./src

# Node.js bağımlılıklarını yükle
RUN npm install

# Uygulamayı 3000 portunda başlat
EXPOSE 3000
CMD ["node", "src/app.js"]

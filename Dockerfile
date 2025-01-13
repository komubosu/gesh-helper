# Используем Node.js как базовый образ
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем и экспортируем проект
RUN npm run build && npm run export

# Финальный образ для деплоя
FROM nginx:alpine

# Копируем статические файлы в nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Экспонируем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]

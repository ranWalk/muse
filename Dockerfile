FROM node:22-alpine AS build

WORKDIR /app

COPY app/package.json app/package-lock.json ./
RUN npm install

COPY app/astro.config.mjs ./
COPY app/src/ ./src/
COPY app/public/ ./public/
RUN npm run build

FROM nginx:1.27-alpine

COPY app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

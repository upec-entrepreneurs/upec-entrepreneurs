FROM node:8.16.0-alpine as builder
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=builder /app/dist/upec-entrepreneurs/ /usr/share/nginx/html/

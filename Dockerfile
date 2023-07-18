FROM node:latest
WORKDIR /app
COPY . .
RUN npx next build

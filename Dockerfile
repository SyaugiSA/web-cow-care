FROM node:latest
WORKDIR /app
COPY . .
RUN npx build

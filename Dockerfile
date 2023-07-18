FROM node:latest
WORKDIR /app
COPY node_module .
COPY .next/ .
COPY . .
RUN npx next build

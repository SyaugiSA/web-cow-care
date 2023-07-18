FROM node:latest
WORKDIR /app
COPY . .
RUN npm install --force
RUN npx next build

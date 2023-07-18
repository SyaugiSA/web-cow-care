FROM node:latest
WORKDIR /app
RUN npm install
COPY /.next .
COPY . .

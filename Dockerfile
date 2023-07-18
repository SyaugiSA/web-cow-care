FROM node:latest
WORKDIR /app
COPY /.next .
COPY . .
RUN npm install

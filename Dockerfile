FROM node:latest
WORKDIR /app
COPY . .
RUN npm install -g -s --no-progress npm
RUN yarn
RUN npm run build

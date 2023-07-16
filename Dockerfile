FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install -g -s --no-progress npm
RUN npm install -g -s --no-progress yarn
RUN yarn
COPY . .
RUN yarn build

FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install -g npm &&\
    npm install -g -s --no-progress yarn
RUN yarn
COPY . .
RUN yarn build

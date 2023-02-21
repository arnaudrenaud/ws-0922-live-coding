FROM node:lts-alpine as base

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

FROM base as dev
CMD npm run start:watch & npx nodemon -w package.json --exec 'npm install'

FROM base as ci
CMD npm run build && npm run test
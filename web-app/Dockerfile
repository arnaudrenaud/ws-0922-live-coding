FROM node:lts-alpine as base

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

FROM base as dev
CMD npm start

FROM base as ci
CMD npm run build && npm run test

FROM base as prod
CMD npm run build
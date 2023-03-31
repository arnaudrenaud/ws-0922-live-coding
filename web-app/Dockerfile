FROM node:lts-alpine as base

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

FROM base as build
COPY src ./src
RUN npm run build

FROM base as dev
CMD npm start

FROM build as ci
CMD npm run test

FROM build as prod
RUN npm install -g serve
CMD npx serve build
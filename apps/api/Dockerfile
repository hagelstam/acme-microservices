ARG NODE_VERSION=22.14.0

FROM node:${NODE_VERSION} as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:${NODE_VERSION}-slim

ENV NODE_ENV production
USER node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE ${PORT}

CMD [ "node", "dist/index.js" ]

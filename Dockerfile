FROM node:alpine AS builder
RUN apk add --no-cache libc6-compat

RUN mkdir -p /app

WORKDIR /app

COPY package.json yarn.lock* /app/


RUN yarn install


COPY ./ /app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
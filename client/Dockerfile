FROM node:10-alpine

RUN mkdir -p /client/
WORKDIR /client/

RUN apk add --update --no-cache --virtual .tmp-build-deps \
    curl
RUN apk del .tmp-build-deps

RUN curl -o- -L https://yarnpkg.com/install.sh | sh

COPY package*.json /client/

RUN yarn install

COPY . /client/

EXPOSE 3000

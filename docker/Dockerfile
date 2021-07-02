FROM node:12-alpine

RUN apk add curl

ADD ./app/* /

RUN npm install

EXPOSE 4444

ENTRYPOINT [ "node", "/server.js" ]
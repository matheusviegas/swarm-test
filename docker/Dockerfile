FROM node:12-alpine

ADD ./app/* /

RUN npm install

EXPOSE 4444

ENTRYPOINT [ "node", "/server.js" ]
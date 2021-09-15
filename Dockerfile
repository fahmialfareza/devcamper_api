FROM node:14-alpine

WORKDIR /src

ADD package.json .

RUN npm install

ADD . .

CMD ["npm", "start"]

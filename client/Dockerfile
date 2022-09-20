FROM node:18-alpine3.16
RUN apk update && apk add git
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
 

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn

COPY . /app 

CMD ["/app/start.sh"]
COPY .env /app/.env

CMD ["yarn", "start"]



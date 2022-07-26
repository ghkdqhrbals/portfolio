FROM node:18-alpine3.16
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --production

CMD ["npm", "start"]
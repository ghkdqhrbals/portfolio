FROM node:18-alpine3.16 AS builder
# 앱 디렉터리 생성
WORKDIR /react-portfolio-website

ENV PATH="./node_modules/.bin:$PATH"
COPY package*.json ./
RUN npm install
# 앱 소스 추가
COPY . .
RUN npm run build

EXPOSE 3000
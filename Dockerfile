FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

EXPOSE 3001:3001

RUN [ "npm", "install" ]

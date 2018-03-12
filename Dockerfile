FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN [ "npm", "install" ]

RUN [ "npm", "run", "build" ]

CMD [ "npm", "run", "start" ]

FROM node:10-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .


RUN npm install --production

EXPOSE 8080
EXPOSE 8000

CMD [ "node", "app.js" ]



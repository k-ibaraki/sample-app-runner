FROM node:14.15.3-buster-slim

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start"]

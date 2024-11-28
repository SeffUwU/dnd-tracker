FROM node:20-alpine

WORKDIR /app/
COPY package.json ./
COPY . .

RUN ["yarn"]
RUN ["yarn", "build"]

EXPOSE 3000

CMD ["yarn", "start"]


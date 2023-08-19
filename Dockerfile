FROM node:20-alpine
RUN apk update && apk add --no-cache g++
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "main.js"]
FROM node:12.16.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001 

CMD ["npm", "run", "boot"]
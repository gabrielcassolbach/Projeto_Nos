FROM node:18.8.0

RUN mkdir -p /src

COPY package.json src/package.json

WORKDIR /src

RUN npm install

COPY . /src

CMD npm start
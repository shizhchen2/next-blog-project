  
FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

# add npm package
COPY ./package.json ./package.json

RUN npm i --registry=https://registry.npm.taobao.org

# copy code
# COPY ./server ./

EXPOSE 3000

CMD npm start
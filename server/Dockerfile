  
FROM node:alpine

RUN mkdir -p /app

COPY . ./app

WORKDIR /app


RUN npm config set registry https://registry.npm.taobao.org
# add npm package
# COPY ./package.json ./package.json

RUN npm install

# copy code

EXPOSE 7001

CMD ["npm", "start"]
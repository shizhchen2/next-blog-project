  
FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

# add npm package
# COPY ./package.json ./package.json

RUN npm i --registry=https://registry.npm.taobao.org

# copy code
COPY . .

EXPOSE 7001

CMD ["npm", "start"]
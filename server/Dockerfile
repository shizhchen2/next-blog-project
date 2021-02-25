  
FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./app

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install

# add npm package
COPY . ./app

# copy code

EXPOSE 7001

CMD ["npm", "start"]
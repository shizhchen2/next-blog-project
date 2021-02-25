  
FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm config set registry=https://registry.npm.taobao.org && npm install


# add npm package
COPY . /usr/src/app

# copy code
CMD ["npm", "start"]
EXPOSE 7001

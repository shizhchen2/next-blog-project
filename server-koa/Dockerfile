
FROM node:alpine

RUN mkdir -p /server

COPY . /server

WORKDIR /server

#RUN npm i --registry=https://registry.npm.taobao.org

# RUN npm config set python python2.7

# RUN npm install --save next@10.0.7

RUN npm install

# RUN npm run build

COPY . ./server

# ENV HOST 0.0.0.0
# ENV PORT 3000

EXPOSE 8080

CMD ["npm", "start"]
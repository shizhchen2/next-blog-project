
FROM node:alpine

RUN mkdir -p /server

COPY . /server

RUN  apt-get update
RUN  apt-get upgrade -y
# Install python3
RUN  apt-get install -y python3


WORKDIR /server

RUN npm config set registry https://registry.npm.taobao.org


RUN npm install
# RUN npm config set python python2.7

# RUN npm install --save next@10.0.7

# RUN npm install

# RUN npm run build

COPY . ./server

# ENV HOST 0.0.0.0
# ENV PORT 3000

EXPOSE 8080

CMD ["npm", "start"]
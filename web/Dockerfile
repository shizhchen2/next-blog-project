
FROM node:alpine

RUN mkdir -p /web

COPY . /web

WORKDIR /web

RUN npm config set registry https://registry.npm.taobao.org

# RUN npm install --save next@10.0.7

RUN npm install

RUN npm run build

COPY . ./web

# ENV HOST 0.0.0.0
# ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]
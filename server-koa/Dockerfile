
FROM node:alpine

RUN mkdir -p /server

COPY . /server

WORKDIR /

RUN set -ex \
	&& yum -y install zlib-devel bzip2-devel libffi-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make wget \
	&& yum clean all \
	&& mkdir /usr/local/python3 

COPY Python-3.7.4.tar.xz  /usr/local/python3/ 

RUN set -ex \
	&& cd /usr/local/python3 \
	&& tar -xvJf  Python-3.7.4.tar.xz \
	&& cd Python-3.7.4 \
	&& ./configure prefix=/usr/local/python3 \
	&& make && make install \
	&& ln -s /usr/local/python3/bin/python3.7 /usr/local/bin/python3 \
	&& ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip3 
	
RUN set -ex \
	&& cd /usr/local/python3 \
	&& python3 -V  

# RUN /usr/local/python3/bin/pip3 install pymysql



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
FROM node
RUN apt-get update


WORKDIR /var/www
RUN mkdir -p app

WORKDIR /var/www/app
CMD npm install && npm run start:dev
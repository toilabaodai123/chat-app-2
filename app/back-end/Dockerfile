FROM node
RUN apt-get update

WORKDIR /var/www
RUN mkdir -p app
COPY . /var/www/app
WORKDIR /var/www/app
CMD npm run start && bash
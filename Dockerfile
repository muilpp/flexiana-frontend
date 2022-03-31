FROM httpd:latest

LABEL maintainer="muilpp@gmail.com"

EXPOSE 80

WORKDIR /usr/local/apache2/htdocs/

RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/muilpp/flexiana-frontend.git
RUN cp -a /usr/local/apache2/htdocs/flexiana-frontend/public/. /usr/local/apache2/htdocs/
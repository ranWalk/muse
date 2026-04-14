FROM nginx:1.27-alpine

COPY app/nginx.conf /etc/nginx/conf.d/default.conf
COPY app/ /usr/share/nginx/html/
RUN rm -f /usr/share/nginx/html/nginx.conf

FROM nginx
ADD build /usr/share/nginx/html
RUN rm etc/nginx/conf.d/default.conf

# Start Nginx server
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]

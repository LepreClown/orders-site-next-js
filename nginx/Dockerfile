# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./nginx.conf /etc/nginx/conf.d/

# Expose the listening port
EXPOSE 80

# Launch NGINX
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

FROM node:alpine

WORKDIR /usr/app

RUN yarn global add pm2

COPY ./package*.json ./

# Install dependencies
RUN yarn install

# Copy all files
COPY ./ ./

# Build app
RUN yarn run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script when container starts
CMD [ "pm2-runtime", "yarn", "--", "start" ]
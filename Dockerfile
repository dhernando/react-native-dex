# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:20-alpine

COPY . /app/
WORKDIR /app

# Install app dependencies
RUN npm install

# Start the app
CMD ["npm", "run", "web"]
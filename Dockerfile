# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Copy the entire app directory to the working directory
COPY . .

# Expose port 8080 for the React Native packager
EXPOSE 8081

# Start the app
CMD ["npm", "run", "web"]
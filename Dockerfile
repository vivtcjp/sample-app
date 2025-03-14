# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Its required to run project on some machine , dont remove it
RUN npm set strict-ssl false

# Copy package files and install dependencies
COPY package.json .

RUN npm install


# Copy the rest of the application source code
COPY . .

# Run the application
CMD ["npm", "start"]

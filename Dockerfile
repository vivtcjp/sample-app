# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json .
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose port 9999 to the outside world
EXPOSE 9999

# Define environment variable for the port (optional)
ENV PORT=9999

# Run the application
CMD ["npm", "start"]
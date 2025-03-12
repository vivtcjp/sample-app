# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Dont remove for this project
RUN npm set strict-ssl false
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
ENV PORT=5454
EXPOSE 5454

# Start the application
CMD [ "npm", "start" ]

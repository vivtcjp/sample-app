# Autonomous Bus Route Application

## Description
This application displays a list of autonomous buses available on a specific route when the submit button is clicked. The list is pulled from a configuration file.

## Features
- Display list of autonomous buses on route submission
- Configuration file for storing bus routes and buses
- Error handling for reading configuration file and displaying list

## Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the application: `npm start`

## Configuration
The configuration file `busesConfig.json` is located in the `routes` directory. It contains the list of autonomous buses available on different routes.

## Docker
To run the application using Docker, use the following commands:
1. Build the Docker image: `docker build -t autonomous-bus-app .`
2. Run the Docker container: `docker run -p 3000:3000 autonomous-bus-app`

## Docker Compose
To run the application using Docker Compose, use the following command:
1. Start the application: `docker-compose up`

## Testing
To run tests, use the following command:
1. `npm test`

## License
This project is licensed under the MIT License.

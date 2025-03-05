# Autonomous Bus Booking

This project is an autonomous bus booking application. It allows users to book autonomous buses for various routes.

## Features

- Display a list of autonomous buses available on a route
- Retrieve source and destination from MongoDB database
- Dockerized application for easy deployment

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Docker

### Installation

1. Clone the repository:

```bash
$ git clone <repository-url>
```

2. Install dependencies:

```bash
$ npm install
```

3. Start MongoDB:

```bash
$ docker-compose up -d mongo
```

4. Start the application:

```bash
$ npm start
```

### Docker

To run the application using Docker, use the following command:

```bash
$ docker-compose up
```

This will start both the application and MongoDB services.

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Select the source and destination from the dropdowns and click on 'Submit'
3. The list of available autonomous buses for the selected route will be displayed.

## License

This project is licensed under the MIT License.
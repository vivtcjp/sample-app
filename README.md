# Autonomous Bus Booking Application

## Description

A fully functional autonomous bus booking application built with Node.js, Express, HTML, CSS, and JavaScript. The application supports user registration, login, bus schedule viewing, seat selection, payments, booking history, and an admin interface for managing routes and bookings.

## Features

- User registration and login with secure password handling and JWT-based authentication
- View and search for bus schedules by date, time, and location
- Select seats and process payments
- Generate booking confirmations and view booking history
- Admin interface to create, edit, and delete bus routes, schedule times, adjust seat capacities, and manage bookings in real time
- Robust concurrency control to prevent seat overbooking
- Input validation, rate limiting, and best practices for error handling and security

## Setup and Deployment

### Prerequisites

- Node.js
- MongoDB
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

```bash
$ git clone <repository-url>
$ cd autonomous-bus-booking
```

2. Install dependencies:

```bash
$ npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/busbooking
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Start the application:

```bash
$ npm start
```

### Docker Deployment

1. Build the Docker image:

```bash
$ docker build -t autonomous-bus-booking .
```

2. Run the Docker container:

```bash
$ docker run -p 3000:3000 autonomous-bus-booking
```

### Docker Compose Deployment

1. Create a `docker-compose.yml` file in the root directory with the following content:

```yaml
version: '3.8'
services:
  app:
    image: node:14
    working_dir: /app
    volumes:
      - .:/app
    command: npm start
    ports:
      - '3000:3000'
    environment:
      - PORT=3000
      - MONGO_URI=mongodb://mongo:27017/busbooking
      - JWT_SECRET=your_jwt_secret
      - STRIPE_SECRET_KEY=your_stripe_secret_key
    depends_on:
      - mongo
  mongo:
    image: mongo:4.4
    ports:
      - '27017:27017'
    volumes:
      - mongo-data:/data/db
volumes:
  mongo-data:
```

2. Start the application using Docker Compose:

```bash
$ docker-compose up
```

## Testing

### Unit Tests

To run unit tests, use the following command:

```bash
$ npm test
```

### Integration Tests

To run integration tests, use the following command:

```bash
$ npm run test:integration
```

## License

This project is licensed under the ISC License.

# Autonomous Bus Booking

A fully functional autonomous bus booking application.

## Setup Instructions

1. Clone the repository:

```bash
$ git clone <repository-url>
$ cd autonomous-bus-booking
```

2. Install dependencies:

```bash
$ npm install
```

3. Start the application:

```bash
$ npm start
```

4. To run the application using Docker:

```bash
$ docker-compose up --build
```

## Features

- User authentication and authorization
- Booking management
- Payment processing
- City selection for Origin and Destination

## API Endpoints

- `GET /api/cities`: Fetch all cities

## Frontend Components

- `OriginDropdown`: Dropdown for selecting the origin city
- `DestinationDropdown`: Dropdown for selecting the destination city

## Dependencies

- bcryptjs
- cookie-parser
- dotenv
- express
- express-rate-limit
- express-validator
- helmet
- jsonwebtoken
- mongoose
- morgan
- stripe
- cors
- jade
- axios
- nodemon (dev dependency)

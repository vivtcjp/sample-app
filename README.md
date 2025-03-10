# Autonomous Bus Booking

## Overview

A fully functional autonomous bus booking application.

## Features

- User authentication and authorization
- Search for bus routes
- Book seats on buses
- View detailed bus schedules
- Manage user profiles
- Payment integration with Stripe

## Setup

1. Clone the repository:

```bash
$ git clone <repository-url>
```

2. Install dependencies:

```bash
$ npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
MONGO_URI=mongodb://localhost:27017/busbooking
STRIPE_SECRET_KEY=<your-stripe-secret-key>
JWT_SECRET=<your-jwt-secret>
```

4. Start the application:

```bash
$ npm start
```

## API Endpoints

### Search Bus Routes

```
GET /search?origin=<origin>&destination=<destination>&weekday=<weekday>
```

Search for bus routes based on the origin, destination, and weekday.

### View Detailed Schedule

```
GET /schedule/:id
```

View detailed schedule for a specific bus route.

### Book a Seat

```
POST /book
```

Book a seat on a bus route.

### Fetch Cities

```
GET /cities
```

Fetch all cities.

### Fetch Destination Cities

```
GET /destination-cities
```

Fetch cities for the destination dropdown.

## Docker Setup

1. Build and run the Docker containers:

```bash
$ docker-compose up --build
```

2. Access the application at `http://localhost:5454`.

## License

This project is licensed under the ISC License.
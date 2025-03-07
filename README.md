# Autonomous Bus Booking

A fully functional autonomous bus booking application.

## Setup Instructions

1. Clone the repository:

```bash
$ git clone <repository-url>
```

2. Navigate to the project directory:

```bash
$ cd autonomous-bus-booking
```

3. Install dependencies:

```bash
$ npm install
```

4. Start the application:

```bash
$ npm start
```

5. To run the application using Docker:

```bash
$ docker-compose up --build
```

## Features

- Search for buses by origin, destination, and date.
- User authentication and authorization.
- Booking management.
- Payment integration with Stripe.

## API Endpoints

- `GET /api/cities`: Fetch the list of cities.
- `POST /api/bookings`: Create a new booking.
- `GET /api/bookings`: Fetch user bookings.
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: User login.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```

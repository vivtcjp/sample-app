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

## Changes Made

- Updated the home page to change the destination input to a dropdown list, using the same API that is used in the origin dropdown list.
- Ensured the DestinationDropdown component correctly fetches and displays the list of destinations using the API.
- Updated Dockerfile and docker-compose.yml to ensure the application can be containerized with the new changes.
- Changed the search button color to green by updating the CSS variable in the style.css file.
- Implemented Material Design standards for all UI elements by updating components and stylesheets.
- Added dependencies for Material Design components in package.json.
- Clicking on search calls the API in the backend to retrieve data from the 'bus-routes' collection, which contains data about buses running from source to destination, the weekday they are operating, and the cost of the trip.
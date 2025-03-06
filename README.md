# Autonomous Bus Booking Application

This is a fully functional autonomous bus booking application.

## Features

- User authentication and authorization
- Search for bus routes
- Book seats on a bus
- View detailed schedule
- Payment processing with Stripe
- Rate limiting for security
- Helmet for security headers
- CORS support
- Dockerized for easy deployment
- MongoDB for data storage

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

3. Create a `.env` file in the root directory and add the following environment variables:

```env
NODE_ENV=development
PORT=3000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```

4. Start the application:

```bash
$ npm start
```

5. To run the application with Docker, use the following commands:

```bash
$ docker-compose build
$ docker-compose up
```

## API Endpoints

- `GET /search` - Search for bus routes
- `GET /schedule/:id` - View detailed schedule
- `POST /book` - Book a seat on a bus
- `GET /cities` - Get the list of cities for the dropdowns

## Frontend

The frontend code is located in the `public` directory. The `main.js` file contains the code to populate the 'Origin' and 'Destination' dropdowns with the list of cities retrieved from the backend.

## Styling

The application uses a modern color palette and styling for the dropdowns. The styles are defined in the `public/stylesheets/style.css` file.

## License

This project is licensed under the ISC License.

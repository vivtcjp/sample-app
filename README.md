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

3. Create a `.env` file in the root directory and add the following environment variables:

```env
MONGO_URI=mongodb://localhost:27017/autonomous-bus-booking
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Start the application:

```bash
$ npm start
```

5. To run the application using Docker, build and start the containers:

```bash
$ docker-compose up --build
```

## New Functionality

### Origin Dropdown

The 'Origin' field in the search form is now a dropdown list populated from the MongoDB collection called 'cities'.

### Endpoint to Fetch Cities

A new endpoint `/cities` has been added to fetch the list of cities from the 'cities' collection in MongoDB.

# Autonomous Bus Booking

## Running the Application with Docker

1. **Build and run the application**:

```sh
docker-compose up --build
```

2. **Access the application**:

Open your browser and go to `http://localhost:3000`

## API Endpoints

- **GET /locations**: Fetches the list of locations from MongoDB.
- **POST /submit**: Submits the selected route and fetches the list of autonomous buses available on that route.

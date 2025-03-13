# Autonomous Bus Booking Application

## Overview

This application allows users to search for bus routes based on origin, destination, and date. It provides information on buses running on the specified route along with the cost of travel.

## Search API

### Endpoint

`GET /search`

### Query Parameters

- `origin`: The origin city of the bus route.
- `destination`: The destination city of the bus route.
- `date`: The date for which to search bus routes.

### Response

The response will be a JSON array containing information about buses running on the specified route along with the cost of travel.

```json
[
  {
    "busId": "<bus_id>",
    "origin": "<origin_city>",
    "destination": "<destination_city>",
    "cost": "<cost_of_travel>"
  }
]
```

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the application using `npm start`.

## Docker Setup

1. Build the Docker image using `docker build -t autonomous-bus-booking .`.
2. Run the application using `docker-compose up`.

## Dependencies

- Express
- Mongoose
- Node-fetch
- Date-fns

## Sample JSON File for Bus Routes

A sample JSON file named 'bus-routes.json' has been created to provide information about various bus routes, including route numbers, starting points, destinations, and timings.

```json
{
  "routes": [
    {
      "routeNumber": "1",
      "startPoint": "A",
      "destination": "B",
      "timings": "6:00 AM - 10:00 PM"
    },
    {
      "routeNumber": "2",
      "startPoint": "C",
      "destination": "D",
      "timings": "7:00 AM - 9:00 PM"
    }
  ]
}
```

## License

This project is licensed under the MIT License.
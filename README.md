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
    "cost": "<cost_of_travel>",
    "travelTime": "<travel_time>"
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
- @material-ui/core
- @material-ui/icons
- @material-ui/lab
- React
- React-dom

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

## Material Design Updates

The origin and destination dropdowns have been updated to follow Material Design guidelines, providing enhanced visuals, animations, and responsiveness.

## New Feature: Material Design Table for Search Results

The search results are now displayed in a Material Design table format. The table includes columns for origin, destination, cost, travel time, and an option button to book the ticket. The table provides a more structured and visually appealing way to present the search results.

### Example Table Structure

```html
<table class="material-table">
  <thead>
    <tr>
      <th>Origin</th>
      <th>Destination</th>
      <th>Cost</th>
      <th>Travel Time</th>
      <th>Book</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>City A</td>
      <td>City B</td>
      <td>$10</td>
      <td>2 hours</td>
      <td><button>Book</button></td>
    </tr>
  </tbody>
</table>
```

## Material Design Theme for Booking Page

The email and phone input fields on the booking page have been updated to follow Material Design guidelines. This provides enhanced visuals, animations, and responsiveness for a better user experience.

### Example Input Fields

```html
<div class="mdc-text-field">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" class="mdc-text-field__input">
  <span class="mdc-line-ripple"></span>
</div>
<div class="mdc-text-field">
  <label for="phone">Phone</label>
  <input type="tel" name="phone" id="phone" class="mdc-text-field__input">
  <span class="mdc-line-ripple"></span>
</div>
```

## New Feature: Confirm Booking

A new feature has been added to allow users to confirm their booking. When the 'Confirm Booking' button is clicked, an entry is added to the bookings collection.

### Endpoint

`POST /confirm-booking`

### Request Body

- `name`: The name of the user.
- `email`: The email of the user.
- `phone`: The phone number of the user.

### Response

The response will be a JSON object containing a message and the booking ID.

```json
{
  "message": "Booking confirmed",
  "bookingId": "<booking_id>"
}
```

## New Feature: Asterisk (*) for Mandatory Fields

All mandatory fields in forms are now indicated with an asterisk (*) next to the field label. This ensures that users are aware of the required fields when filling out forms.

### Example Form Field

```html
<div>
  <label for="name">Name *</label>
  <input type="text" name="name" id="name">
</div>
```

## New Feature: Bus Seat Layout View

A new feature has been added to the booking page that displays a top view of a bus with a seat layout. The layout allows users to select and book preferred seats. The bus has 10 rows with 4 seats per row, totaling 40 seats.

### Example Bus Seat Layout

```html
<div id="bus-layout"></div>
<script>
  const busLayout = document.getElementById('bus-layout');
  const rows = 10;
  const seatsPerRow = 4;
  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    for (let j = 0; j < seatsPerRow; j++) {
      const seatDiv = document.createElement('div');
      seatDiv.className = 'seat';
      seatDiv.innerText = `Row ${i + 1} Seat ${j + 1}`;
      seatDiv.addEventListener('click', () => {
        seatDiv.classList.toggle('selected');
      });
      rowDiv.appendChild(seatDiv);
    }
    busLayout.appendChild(rowDiv);
  }
</script>
<style>
  .row {
    display: flex;
    margin-bottom: 10px;
  }
  .seat {
    width: 50px;
    height: 50px;
    background-color: #ccc;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .seat.selected {
    background-color: #6c6;
  }
</style>
```
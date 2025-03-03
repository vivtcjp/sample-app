# Autonomous Bus Booking Feature

## Overview

The autonomous bus booking feature allows users to create bookings for buses automatically. This feature is integrated with the existing booking system and provides a seamless booking experience.

## Endpoints

### Create Autonomous Booking

- **URL**: `/booking/autonomous`
- **Method**: `POST`
- **Description**: Creates an autonomous booking for a bus.
- **Request Body**:
  - `user`: The ID of the user making the booking.
  - `bus`: The ID of the bus being booked.
- **Response**:
  - `201 Created`: The booking was created successfully.
  - `400 Bad Request`: There was an error creating the booking.

## Usage

To create an autonomous booking, send a `POST` request to the `/booking/autonomous` endpoint with the user ID and bus ID in the request body.

Example:

```bash
curl -X POST \
  http://localhost:3000/booking/autonomous \
  -H 'Content-Type: application/json' \
  -d '{
    "user": "<user_id>",
    "bus": "<bus_id>"
  }'
```

Replace `<user_id>` and `<bus_id>` with the actual IDs of the user and bus, respectively.

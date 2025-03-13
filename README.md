# Autonomous Bus Booking Application

This application allows users to book autonomous bus rides by selecting the origin, destination, and date.

### Features
- Choose origin and destination from dropdown lists
- Select date of travel
- Search for available bus rides
- Modern and intuitive user interface
- Enhanced visual design

### Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the application:
   ```
   npm start
   ```

### Docker Setup

1. Build the Docker image:
   ```
   docker build -t autonomous-bus-booking-app .
   ```

2. Run the application using Docker Compose:
   ```
   docker-compose up
   ```

### Environment Variables

Add the following variables to your .env file:

```
DB_HOST=localhost
DB_PORT=27017
DB_NAME=autonomous_bus_booking
DB_USER=your_db_user
DB_PASS=your_db_password
```

### Changes Made

- Redesigned landing page for autonomous bus booking application
- Enhanced visual design and user interface
- Updated index.jade, layout.jade, and style.css files
- Added Bootstrap and jQuery dependencies
- Updated Dockerfile and docker-compose.yml
- Removed duplicate form from layout.jade
- Changed origin and destination fields to dropdown lists
- Updated title to 'Autonomous Bus Booking Application'
- Created 'cities' API endpoint
- Updated booking form to call 'cities' API
- Added MongoDB connection setup
- Added necessary environment variables to .env file

### New Search API Endpoint

- **Endpoint**: `/search`
- **Method**: GET
- **Parameters**:
  - `origin`: The origin location
  - `destination`: The destination location
  - `date`: The date of travel
- **Response**: Returns a status code 200 with the provided parameters in the response body

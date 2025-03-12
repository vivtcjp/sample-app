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

### Changes Made

- Redesigned landing page for autonomous bus booking application
- Enhanced visual design and user interface
- Updated index.jade, layout.jade, and style.css files
- Added Bootstrap and jQuery dependencies
- Updated Dockerfile and docker-compose.yml
- Removed duplicate form from layout.jade
- Changed origin and destination fields to dropdown lists
- Updated title to 'Autonomous Bus Booking Application'
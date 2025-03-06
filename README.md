# Autonomous Bus Booking Application

## Description
A fully functional autonomous bus booking application that allows users to register, log in, search for buses, view schedules, select seats, and book tickets. Administrators can manage bus routes, ticket prices, seat capacity, and view all bookings in real-time.

## Features
- User registration and login
- Search for buses based on location, date, and time
- View detailed schedules and seat availability
- Select seats and book tickets
- Payment handling (stubbed)
- Personal dashboard to view or cancel bookings
- Admin panel to manage bus routes, ticket prices, seat capacity, and bookings
- Basic concurrency control to prevent double-booking seats
- Input validation for all user-facing features
- JWT authentication for secure operations

## Setup Instructions

### Prerequisites
- Node.js
- Docker
- Docker Compose

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd autonomous-bus-booking
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGO_URI=mongodb://localhost:27017/busbooking
   JWT_SECRET=<your-jwt-secret>
   ```
4. Start the application:
   ```
   npm start
   ```

### Docker Setup
1. Build and start the Docker containers:
   ```
   docker-compose up --build
   ```
2. Access the application at `http://localhost:3000`

### Seed Data
1. Run the seed script to populate initial bus route data:
   ```
   node seed.js
   ```

## License
This project is licensed under the ISC License.

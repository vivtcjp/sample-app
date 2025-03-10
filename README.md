# Autonomous Bus Booking Application

## Overview
This application allows users to book bus tickets online. It includes features such as user authentication, bus search, booking, and payment processing.

## Features
- User authentication (registration, login, logout)
- Search for buses based on origin, destination, and date
- View bus schedules and seat availability
- Book bus tickets
- Payment processing using Stripe
- Admin dashboard for managing routes and bookings

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- Material-UI
- Docker
- Docker Compose

## Getting Started

### Prerequisites
- Node.js
- Docker
- Docker Compose

### Installation
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
4. Start the application using Docker Compose:
```bash
$ docker-compose up --build
```

### API Endpoints
- `GET /api/cities`: Fetch all cities
- `GET /api/routes/search`: Search for bus routes based on origin, destination, and date
- `POST /api/routes/book`: Book a seat on a bus

### Environment Variables
- `MONGO_URI`: MongoDB connection string
- `PORT`: Port number for the application

### License
This project is licensed under the MIT License.

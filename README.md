# Autonomous Bus Booking Application

This application allows users to book autonomous bus rides. It includes the following features:

- **Cities API**: Retrieve a list of cities.
- **Search API**: Search for bus rides based on origin, destination, and date.
- **Results Page**: Display search results.

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

### Running the Application

#### Using Node.js

```bash
$ npm start
```

#### Using Docker Compose

```bash
$ docker-compose up --build
```

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the form to search for bus rides by selecting origin, destination, and date.
3. Click the search button to view the results on the results page.
4. The application will now wait for the search API response before navigating to the results page.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.
const City = require('../models/City');
const dotenv = require('dotenv');
dotenv.config();

// Fetch all cities
exports.getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cities', error });
  }
};

// Fetch cities for destination dropdown
exports.getDestinationCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination cities', error });
  }
};

// Search bus routes
exports.searchBusRoutes = async (req, res) => {
  const { origin, destination, weekday } = req.query;

  try {
    const routes = await Route.find({
      source: origin,
      destination,
      weekday
    });

    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bus routes', error });
  }
};
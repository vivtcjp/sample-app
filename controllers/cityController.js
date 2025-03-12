const City = require('../models/City');
const Route = require('../models/Route');
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

// New search API
exports.search = async (req, res) => {
  const { source, destination, date } = req.query;

  try {
    // For now, just return 200
    res.status(200).json({ message: 'Search API called successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error in search API', error });
  }
};
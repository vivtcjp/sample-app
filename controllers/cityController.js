const City = require('../models/City');

// Fetch all cities
exports.getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cities', error });
  }
};
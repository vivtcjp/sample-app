const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middlewares/auth');
const Route = require('../models/Route');
const Booking = require('../models/booking');
const City = require('../models/City');
const dotenv = require('dotenv');
dotenv.config();

// Search for buses
router.get('/search', async (req, res) => {
  const { origin, destination, weekday } = req.query;

  try {
    const routes = await Route.find({
      source: origin,
      destination,
      weekday
    });

    res.json(routes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// View detailed schedule
router.get('/schedule/:id', async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);

    if (!route) return res.status(404).json({ msg: 'Route not found' });

    res.json(route);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Book a seat
router.post('/book', [
  auth,
  [
    check('routeId', 'Route ID is required').not().isEmpty(),
    check('seatNumber', 'Seat number is required').isNumeric()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { routeId, seatNumber } = req.body;

  try {
    const route = await Route.findById(routeId);

    if (!route) return res.status(404).json({ msg: 'Route not found' });

    const existingBooking = await Booking.findOne({ route: routeId, seatNumber });

    if (existingBooking) return res.status(400).json({ msg: 'Seat already booked' });

    const newBooking = new Booking({
      user: req.user.id,
      route: routeId,
      seatNumber
    });

    const booking = await newBooking.save();

    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add this new endpoint
router.get('/cities', async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// New search API endpoint
router.get('/search', async (req, res) => {
  const { source, destination, date } = req.query;

  try {
    // For now, just return 200
    res.status(200).json({ message: 'Search API called successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error in search API', error });
  }
});

module.exports = router;

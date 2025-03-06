const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middlewares/auth');
const Route = require('../models/Route');
const Booking = require('../models/Booking');

// Create a new bus route
router.post('/routes', [
  auth,
  [
    check('origin', 'Origin is required').not().isEmpty(),
    check('destination', 'Destination is required').not().isEmpty(),
    check('departureTime', 'Departure time is required').not().isEmpty(),
    check('arrivalTime', 'Arrival time is required').not().isEmpty(),
    check('price', 'Price is required').isNumeric(),
    check('seatCapacity', 'Seat capacity is required').isNumeric()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { origin, destination, departureTime, arrivalTime, price, seatCapacity } = req.body;

  try {
    const newRoute = new Route({
      origin,
      destination,
      departureTime,
      arrivalTime,
      price,
      seatCapacity
    });

    const route = await newRoute.save();
    res.json(route);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a bus route
router.put('/routes/:id', auth, async (req, res) => {
  const { origin, destination, departureTime, arrivalTime, price, seatCapacity } = req.body;

  const routeFields = {};
  if (origin) routeFields.origin = origin;
  if (destination) routeFields.destination = destination;
  if (departureTime) routeFields.departureTime = departureTime;
  if (arrivalTime) routeFields.arrivalTime = arrivalTime;
  if (price) routeFields.price = price;
  if (seatCapacity) routeFields.seatCapacity = seatCapacity;

  try {
    let route = await Route.findById(req.params.id);

    if (!route) return res.status(404).json({ msg: 'Route not found' });

    route = await Route.findByIdAndUpdate(
      req.params.id,
      { $set: routeFields },
      { new: true }
    );

    res.json(route);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete a bus route
router.delete('/routes/:id', auth, async (req, res) => {
  try {
    let route = await Route.findById(req.params.id);

    if (!route) return res.status(404).json({ msg: 'Route not found' });

    await Route.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Route removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all bus routes
router.get('/routes', async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// View all bookings
router.get('/bookings', auth, async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', ['name', 'email']).populate('route', ['origin', 'destination', 'departureTime', 'arrivalTime']);
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Modify a booking
router.put('/bookings/:id', auth, async (req, res) => {
  const { seatNumber } = req.body;

  try {
    let booking = await Booking.findById(req.params.id);

    if (!booking) return res.status(404).json({ msg: 'Booking not found' });

    booking.seatNumber = seatNumber;
    await booking.save();

    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

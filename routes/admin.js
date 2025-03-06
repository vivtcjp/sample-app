const express = require('express');
const router = express.Router();
const Route = require('../models/Route');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// Create a new bus route
router.post('/routes', adminAuth, async (req, res) => {
  const { source, destination, departureTime, arrivalTime, seatCapacity } = req.body;
  try {
    const newRoute = new Route({ source, destination, departureTime, arrivalTime, seatCapacity });
    await newRoute.save();
    res.status(201).json({ message: 'Route created successfully', route: newRoute });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Edit a bus route
router.put('/routes/:id', adminAuth, async (req, res) => {
  const { id } = req.params;
  const { source, destination, departureTime, arrivalTime, seatCapacity } = req.body;
  try {
    const route = await Route.findById(id);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    route.source = source;
    route.destination = destination;
    route.departureTime = departureTime;
    route.arrivalTime = arrivalTime;
    route.seatCapacity = seatCapacity;
    await route.save();
    res.json({ message: 'Route updated successfully', route });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a bus route
router.delete('/routes/:id', adminAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const route = await Route.findById(id);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    await route.remove();
    res.json({ message: 'Route deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Manage bookings in real time
router.get('/bookings', adminAuth, async (req, res) => {
  try {
    const bookings = await Booking.find().populate('route').populate('user');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

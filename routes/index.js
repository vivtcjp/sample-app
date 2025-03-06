const express = require('express');
const router = express.Router();
const Route = require('../models/Route');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

// View bus schedules
router.get('/schedules', async (req, res) => {
  try {
    const { date, source, destination } = req.query;
    const schedules = await Route.find({
      departureTime: { $gte: new Date(date) },
      source,
      destination
    });
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Select seats
router.post('/select-seats', async (req, res) => {
  const { routeId, seats } = req.body;
  try {
    const route = await Route.findById(routeId);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    if (route.seatCapacity < seats) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }
    route.seatCapacity -= seats;
    await route.save();
    res.json({ message: 'Seats selected successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Process payment
router.post('/payment', async (req, res) => {
  const { token, amount } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token,
      description: 'Bus booking payment'
    });
    res.json({ message: 'Payment successful', charge });
  } catch (error) {
    res.status(500).json({ message: 'Payment failed', error });
  }
});

// Generate booking confirmation
router.post('/confirm-booking', auth, async (req, res) => {
  const { routeId, seats } = req.body;
  try {
    const route = await Route.findById(routeId);
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    const booking = new Booking({
      user: req.user.id,
      route: routeId,
      seats,
      bookingDate: new Date()
    });
    await booking.save();
    res.json({ message: 'Booking confirmed', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// View booking history
router.get('/booking-history', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('route');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

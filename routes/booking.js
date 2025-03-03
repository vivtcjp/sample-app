const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

// Route to create a booking
router.post('/', async (req, res) => {
  const booking = new Booking({
    user: req.body.user,
    bus: req.body.bus,
    status: 'confirmed'
  });
  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to view booking details
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('user').populate('bus');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
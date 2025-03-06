const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const Booking = require('../models/Booking');

// View user bookings
router.get('/bookings', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('route', ['origin', 'destination', 'departureTime', 'arrivalTime']);
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Cancel a booking
router.delete('/bookings/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) return res.status(404).json({ msg: 'Booking not found' });

    if (booking.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await booking.remove();

    res.json({ msg: 'Booking cancelled' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

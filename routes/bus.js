const express = require('express');
const router = express.Router();
const Bus = require('../models/bus');

// Route to search available buses
router.get('/search', async (req, res) => {
  try {
    const buses = await Bus.find({ availability: true });
    res.json(buses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to book a bus
router.post('/book', async (req, res) => {
  // Booking logic here
});

// Route to view booking details
router.get('/booking/:id', async (req, res) => {
  // Booking details logic here
});

module.exports = router;
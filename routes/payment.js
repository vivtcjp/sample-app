const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middlewares/auth');
const Booking = require('../models/booking');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Stub payment handling
router.post('/pay', [
  auth,
  [
    check('bookingId', 'Booking ID is required').not().isEmpty(),
    check('amount', 'Amount is required').isNumeric()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { bookingId, amount } = req.body;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) return res.status(404).json({ msg: 'Booking not found' });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    booking.paymentStatus = 'Paid';
    await booking.save();

    res.json({
      clientSecret: paymentIntent.client_secret,
      booking
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

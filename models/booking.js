const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['confirmed', 'pending', 'cancelled'], default: 'pending' }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
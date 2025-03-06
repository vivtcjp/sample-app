const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Route',
    required: true
  },
  seatNumber: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    default: 'Pending'
  }
});

BookingSchema.index({ route: 1, seatNumber: 1 }, { unique: true });

module.exports = mongoose.model('Booking', BookingSchema);

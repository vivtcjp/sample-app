const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  source: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  seatCapacity: { type: Number, required: true }
});

routeSchema.methods.reserveSeats = async function (seats) {
  if (this.seatCapacity < seats) {
    throw new Error('Not enough seats available');
  }
  this.seatCapacity -= seats;
  await this.save();
};

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;

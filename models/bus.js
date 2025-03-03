const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: { type: String, required: true },
  route: { type: String, required: true },
  availability: { type: Boolean, default: true }
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
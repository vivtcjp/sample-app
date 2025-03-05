const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  source: String,
  destination: String,
});

const Route = mongoose.model('Route', routeSchema);

// Insert cities in Japan
const citiesInJapan = [
  { source: 'Tokyo', destination: 'Osaka' },
  { source: 'Kyoto', destination: 'Hiroshima' },
  { source: 'Nagoya', destination: 'Fukuoka' },
  { source: 'Sapporo', destination: 'Sendai' },
  { source: 'Naha', destination: 'Kagoshima' }
];

Route.insertMany(citiesInJapan, (err, docs) => {
  if (err) {
    console.error('Error inserting cities in Japan:', err);
  } else {
    console.log('Cities in Japan inserted successfully:', docs);
  }
});

module.exports = Route;

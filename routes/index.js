var express = require('express');
var router = express.Router();
var Route = require('../models/Route');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const routes = await Route.find({});
    const sources = routes.map(route => route.source);
    const destinations = routes.map(route => route.destination);
    res.render('index', { title: 'Autonomous Bus Booking', sources, destinations });
  } catch (err) {
    next(err);
  }
});

/* POST book bus */
router.post('/book', function(req, res, next) {
  const { source, destination } = req.body;
  // Implement booking logic here
  res.send(`Bus booked from ${source} to ${destination}`);
});

module.exports = router;

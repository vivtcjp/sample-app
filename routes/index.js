var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Autonomous Bus Booking Application' });
});

/* GET cities API. */
router.get('/cities', async function(req, res, next) {
  try {
    const cities = await mongoose.connection.db.collection('cities').find().toArray();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve cities' });
  }
});

/* GET search API. */
router.get('/search', async function(req, res, next) {
  const { origin, destination, date } = req.query;
  const dayOfWeek = new Date(date).toLocaleString('en-us', { weekday: 'short' }).toUpperCase();

  try {
    const buses = await mongoose.connection.db.collection('bus-routes').find({
      origin,
      destination,
      day: dayOfWeek
    }).toArray();

    const results = buses.map(bus => ({
      busId: bus._id,
      origin: bus.origin,
      destination: bus.destination,
      cost: bus.cost
    }));

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve bus routes' });
  }
});


module.exports = router;

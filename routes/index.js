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

/* GET booking page. */
router.get('/booking', function(req, res, next) {
  res.render('booking', { title: 'Booking Page' });
});

/* POST confirm booking */
router.post('/confirm-booking', async function(req, res, next) {
  let bookingData = req.body;
  bookingData._id = new mongoose.Types.ObjectId(); // Generate MongoDB _id
  try {
    const result = await mongoose.connection.db.collection('bookings').insertOne(bookingData);
    res.status(201).json({ message: 'Booking confirmed', bookingId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to confirm booking' });
  }
});

module.exports = router;

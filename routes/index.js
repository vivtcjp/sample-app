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
router.get('/search', function(req, res, next) {
  const { origin, destination, date } = req.query;
  res.status(200).json({ origin, destination, date });
  res.redirect('/results'); // Navigate to results page after successful search
});

/* GET results page. */
router.get('/results', function(req, res, next) {
  const { origin, destination, date } = req.query;
  res.render('results', { title: 'Results', origin, destination, date });
});

module.exports = router;

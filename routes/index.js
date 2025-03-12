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

module.exports = router;

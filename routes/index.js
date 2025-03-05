var express = require('express');
var router = express.Router();
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Autonomous Bus Booking' });
});

/* POST submit route */
router.post('/submit', function(req, res, next) {
  var route = req.body.route;
  fs.readFile('./routes/busesConfig.json', 'utf8', function(err, data) {
    if (err) {
      return res.status(500).send('Error reading configuration file');
    }
    try {
      var config = JSON.parse(data);
      var buses = config.routes.find(r => r.route === route);
      if (buses) {
        res.json(buses.buses);
      } else {
        res.status(404).send('No buses found for this route');
      }
    } catch (parseError) {
      res.status(500).send('Error parsing configuration file');
    }
  });
});

/* GET sources and destinations */
router.get('/locations', function(req, res, next) {
  MongoClient.connect(url, function(err, client) {
    if (err) {
      return res.status(500).send('Error connecting to database');
    }
    var db = client.db('autonomous_bus_booking');
    var collection = db.collection('locations');
    collection.find({}).toArray(function(err, docs) {
      if (err) {
        return res.status(500).send('Error fetching data from database');
      }
      res.json(docs);
    });
  });
});

module.exports = router;

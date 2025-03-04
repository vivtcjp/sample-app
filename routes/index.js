var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

module.exports = router;

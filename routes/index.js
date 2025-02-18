var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pingpong', { title: 'Ping Pong Game' });
});

module.exports = router;

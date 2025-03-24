var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

// User model
var User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String
}));

// Register route
router.post('/register', async function(req, res, next) {
  try {
    var hashedPassword = await bcrypt.hash(req.body.password, 10);
    var user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

// Login route
router.post('/login', async function(req, res, next) {
  try {
    var user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send('User not found');
    }
    var isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid password');
    }
    var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).send({ token: token });
  } catch (err) {
    res.status(500).send('Error logging in');
  }
});

module.exports = router;

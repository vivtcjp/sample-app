const { check, validationResult } = require('express-validator');

const validateUserRegistration = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateUserLogin = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateBusRoute = [
  check('origin', 'Origin is required').not().isEmpty(),
  check('destination', 'Destination is required').not().isEmpty(),
  check('departureTime', 'Departure time is required').not().isEmpty(),
  check('arrivalTime', 'Arrival time is required').not().isEmpty(),
  check('price', 'Price is required').isNumeric(),
  check('seatCapacity', 'Seat capacity is required').isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateUserRegistration,
  validateUserLogin,
  validateBusRoute
};

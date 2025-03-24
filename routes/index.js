var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var nodemailer = require('nodemailer');

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
  console.log(bookingData);
  try {
    const result = await mongoose.connection.db.collection('bookings').insertOne(bookingData);
    res.status(201).json({ message: 'Booking confirmed', bookingId: result.insertedId });

    // Send confirmation email
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: bookingData.email,
      subject: 'Booking Confirmation',
      text: `Your booking is confirmed. Booking ID: ${result.insertedId}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    // Send SMS notification
    twilio.messages.create({
      body: `Your booking is confirmed. Booking ID: ${result.insertedId}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: bookingData.phone
    }).then(message => console.log('SMS sent:', message.sid)).catch(error => console.log('Error sending SMS:', error));

  } catch (err) {
    res.status(500).json({ error: 'Failed to confirm booking' });
  }
});

/* POST Stripe payment */
router.post('/pay/stripe', async function(req, res, next) {
  res.status(200).json({ message: 'Payment successful' });
});

/* POST PayPal payment */
router.post('/pay/paypal', function(req, res, next) {
  res.status(200).json({ message: 'Payment successful' });
});

module.exports = router;

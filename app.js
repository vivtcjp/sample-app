const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/busbooking', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bookingRouter = require('./routes/booking');
app.use('/booking', bookingRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  destination: String,
  date: Date
});

module.exports = mongoose.model('Booking', bookingSchema);

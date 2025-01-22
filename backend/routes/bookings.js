const express = require('express');
const Booking = require('../models/booking');

const router = express.Router();

router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).send(booking);
});

module.exports = router;

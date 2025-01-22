const express = require('express');
const mongoose = require('mongoose');
const bookingsRouter = require('./routes/bookings');
const schedulesRouter = require('./routes/schedules');

const app = express();
app.use(express.json());

app.use('/api/bookings', bookingsRouter);
app.use('/api/schedules', schedulesRouter);

const PORT = 5000;
mongoose.connect('mongodb://localhost:27017/bus_booking', { useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(err));

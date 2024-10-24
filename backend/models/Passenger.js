// backend/models/Passenger.js
const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departureDate: { type: Date, required: true },
  arrivalDate: { type: Date, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model('Passenger', PassengerSchema);

// backend/routes/passenger.js
const express = require('express');
const Passenger = require('../models/Passenger');
const router = express.Router();

// Insert new passenger
router.post('/', async (req, res) => {
  try {
    const newPassenger = new Passenger(req.body);
    const savedPassenger = await newPassenger.save();
    res.status(201).json(savedPassenger);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete passenger by phone number
router.delete('/:phoneNumber', async (req, res) => {
  try {
    const passenger = await Passenger.findOneAndDelete({ phoneNumber: req.params.phoneNumber });
    if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
    res.status(200).json({ message: 'Passenger deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update passenger by phone number
router.put('/:phoneNumber', async (req, res) => {
  try {
    const passenger = await Passenger.findOneAndUpdate(
      { phoneNumber: req.params.phoneNumber },
      req.body,
      { new: true }
    );
    if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
    res.status(200).json(passenger);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all passengers
router.get('/', async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.status(200).json(passengers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

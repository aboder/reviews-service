const mongoose = require('mongoose');
const db = require('../index.js');

const roomSchema = new mongoose.Schema({
  id: Number,
  rating: {
    communication: { type: Number, min: 1, max: 5 },
    location: { type: Number, min: 1, max: 5 },
    value: { type: Number, min: 1, max: 5 },
    checkin: { type: Number, min: 1, max: 5 },
    accuracy: { type: Number, min: 1, max: 5 },
    cleanliness: { type: Number, min: 1, max: 5 },
    overall: { type: Number, min: 1, max: 5 },
  },
});

const Room = mongoose.model('room', roomSchema);

module.exports = Room;

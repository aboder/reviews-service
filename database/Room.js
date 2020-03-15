const mongoose = require('mongoose');
const db = require('./index.js');

const roomSchema = new mongoose.Schema({
  id: {type: Number, min: 0, max: 99},
  name: String,
  reviews: [
    {
      reviewee: String,
      revieweeAvatar: String,
      createdAt: Date,
      text: String
    }
  ],
  rating: {
    overall: {type: Number, min: 1, max: 5},
    accuracy: {type: Number, min: 1, max: 5},
    location: {type: Number, min: 1, max: 5},
    cleanliness: {type: Number, min: 1, max: 5},
    communication: {type: Number, min: 1, max: 5},
    checkIn: {type: Number, min: 1, max: 5},
    value: {type: Number, min: 1, max: 5}
  }
})

const roomsModel = mongoose.model('rooms', roomSchema);

module.exports = roomsModel
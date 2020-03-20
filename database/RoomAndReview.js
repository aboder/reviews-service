const mongoose = require('mongoose');
const db = require('./index.js');

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

const reviewSchema = new mongoose.Schema({
  roomid: Number,
  author: String,
  authorsAvatar: String,
  createdAt: Date,
  text: String,
});

const Room = mongoose.model('room', roomSchema);
const Review = mongoose.model('review', reviewSchema);

module.exports = {
  Room,
  Review,
};

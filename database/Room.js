const mongoose = require('mongoose');
const db = require('./index.js');

const roomSchema = new mongoose.Schema({
  id: Number,
  rating: {
    overall: { type: Number, min: 1, max: 5 },
    accuracy: { type: Number, min: 1, max: 5 },
    location: { type: Number, min: 1, max: 5 },
    cleanliness: { type: Number, min: 1, max: 5 },
    communication: { type: Number, min: 1, max: 5 },
    checkIn: { type: Number, min: 1, max: 5 },
    value: { type: Number, min: 1, max: 5 },
  },
});

const reviewSchema = new mongoose.Schema({
  roomid: Number,
  author: String,
  authorsAvatar: String,
  createdAt: Date,
  text: String,
});

const roomModel = mongoose.model('room', roomSchema);
const reviewModel = mongoose.model('review', reviewSchema);

module.exports = {
  roomModel,
  reviewModel,
};

const mongoose = require('mongoose');
const db = require('../index.js');

const reviewSchema = new mongoose.Schema({
  roomid: Number,
  author: String,
  authorsAvatar: String,
  createdAt: Date,
  text: String,
});

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
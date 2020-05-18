const Room = require('../models/Room.js');
const Review = require('../models/Review.js');
const generateData = require('./generateData.js');

const insertRoomsAndReviews = () => {
  Room.create(generateData.generate100Rooms());
  Review.create(generateData.generate5000Reviews());
  console.log('Database seeded');
};

insertRoomsAndReviews();

module.export = {
  insertRoomsAndReviews,
};

const Room = require('../models/Room.js');
const Review = require('../models/Review.js');
const generateData = require('./generateData.js');

const insertRoomsAndReviews = () => {
  Room.create(generateData.generate100Rooms())
    .then(console.log('rooms seeded'))
    .catch(console.log('error seeding rooms'));
  Review.create(generateData.generate5000Reviews())
    .then(console.log('reviews seeded'))
    .catch(console.log('error seeding reviews'));
};

insertRoomsAndReviews();

module.export = {
  insertRoomsAndReviews,
};

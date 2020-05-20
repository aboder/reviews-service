const Room = require('../models/Room.js');
const Review = require('../models/Review.js');
const generateData = require('./generateData.js');

const insertRoomsAndReviews = () => {
  Room.create(generateData.generate100Rooms())
    .then(res => console.log('rooms seeded'))
    .catch(err => console.log('error seeding rooms'));
  Review.create(generateData.generate5000Reviews())
    .then(res => console.log('reviews seeded'))
    .catch(err => console.log('error seeding reviews'));
};

insertRoomsAndReviews();

module.export = {
  insertRoomsAndReviews,
};

const Promise = require('bluebird');
const dbCollections = require('../database/RoomAndReview.js');

const findRoomAndReviews = (roomid, reviewgroup, callback) => {
  const roomQuery = dbCollections.Room.findOne({ id: roomid }, { _id: 0, __v: 0, id: 0 });
  const reviewsQuery = dbCollections.Review.find({ roomid: roomid }, { roomid: 0, _id: 0, __v: 0 })
    .limit(5)
    .skip(reviewgroup * 5);

  Promise.all([
    roomQuery.exec(),
    reviewsQuery.exec(),
  ])
    .then(([{ rating }, reviews]) => {
      const result = {};
      result.rating = rating;
      result.reviews = reviews;
      callback(null, result);
    })
    .catch(() => callback('Error'));
};

module.exports = findRoomAndReviews;

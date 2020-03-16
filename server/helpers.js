const Rooms = require('../database/Room.js');

const maxReviews = 5;

const findReviewsForRoomAndGroup = (roomid, reviewgroup, callback) => {
  Rooms.findOne({ id: roomid }, { _id: 0, __v: 0 }, (err, room) => {
    if (err) {
      callback(err);
    } else {
      let reviewGroup = Number(reviewgroup);
      const reviewGroupIsWithinBounds = (reviewGroup + 1) * maxReviews <= room.reviews.length;
      reviewGroup = reviewGroupIsWithinBounds ? reviewGroup : 0;
      const reviewsStart = reviewGroup * maxReviews;
      const reviewsEnd = reviewsStart + maxReviews;

      room.reviews = room.reviews.slice(reviewsStart, reviewsEnd);
      callback(null, room);
    }
  });
};

module.exports = findReviewsForRoomAndGroup;

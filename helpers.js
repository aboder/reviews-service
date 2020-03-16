const Rooms = require('./database/Room.js');

let cachedRoom = {};
const maxReviews = 5;

const findAndCacheRoom = (roomid, callback) => {
  if (cachedRoom.id === roomid) {
    callback(null, cachedRoom);
  } else {
    Rooms.findOne({ id: roomid }, (err, room) => {
      if (err) {
        callback(err);
      } else {
        cachedRoom = room;
        callback(null, cachedRoom);
      }
    });
  }
};

const findReviewsForGroup = (selReviewGroup, callback) => {
  let reviewGroup = Number(selReviewGroup);
  let reviews = [];
  if (typeof reviewGroup !== 'number') {
    reviews = cachedRoom.reviews.slice(0, maxReviews);
  } else {
    const reviewGroupIsWithinBounds = (reviewGroup + 1) * maxReviews <= cachedRoom.numOfReviews;
    reviewGroup = reviewGroupIsWithinBounds ? reviewGroup : 0;
    const reviewsStart = reviewGroup * maxReviews;
    const reviewsEnd = reviewsStart + maxReviews;

    reviews = cachedRoom.reviews.slice(reviewsStart, reviewsEnd);
  }
  callback(reviews);
};


module.exports = {
  findAndCacheRoom,
  findReviewsForGroup,
};


// var findReviewsForRoomAndGroup = (roomid, reviewgroup, callback) => {
//     Rooms.findOne({id: roomid}, (err, room) => {
//         if (err) {
//             callback(err)
//         } else {
//         // the user is able to request a sub-section of room reviews using a query param stylized as such: '?reviewgroup='.
//             var reviewGroup = Number(reviewgroup);
//             var maxReviews = 5;

//             if (isNaN(reviewGroup)) {
//                 room.reviews = room.reviews.slice(0, maxReviews);
//             } else {
//                 var reviewGroupIsWithinBounds = (reviewGroup + 1) * maxReviews <= room.reviews.length;
//                 reviewGroup = reviewGroupIsWithinBounds ? reviewGroup : 0 ;
//                 var reviewsStart = reviewGroup * maxReviews;
//                 var reviewsEnd = reviewsStart + maxReviews;

//                 room.reviews = room.reviews.slice(reviewsStart, reviewsEnd);
//             }
//             callback(null, room);
//         }
//     })
// }
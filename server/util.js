const dbCollections = require('../database/RoomAndReview.js');

const visibleReviews = 4;

const findNumOfTotalReviews = (roomid, callback) => {
  dbCollections.Review.find({ roomid: roomid }, { roomid: 0, _id: 0, __v: 0 })
    .countDocuments()
    .exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
};

const findRoom = (roomid, callback) => {
  dbCollections.Room.findOne({ id: roomid }, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const findGroupOfReviews = (roomid, reviewgroup, callback) => {
  dbCollections.Review.find({ roomid: roomid }, { roomid: 0, _id: 0, __v: 0 })
    .sort({ createdAt: -1 })
    .limit(visibleReviews)
    .skip(reviewgroup * visibleReviews)
    .exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
};


const sendRoomsDefaultState = (roomid, callback) => {
  const defaultState = {};
  findRoom(roomid, (roomErr, roomResults) => {
    if (roomErr) {
      callback(roomErr);
    } else {
      defaultState.rating = roomResults.rating;
      findNumOfTotalReviews(roomid, (lengthErr, lengthResults) => {
        if (lengthErr) {
          callback(lengthErr);
        } else {
          defaultState.numOfReviews = lengthResults;
          findGroupOfReviews(roomid, 0, (reviewErr, reviewResults) => {
            if (reviewErr) {
              callback(reviewErr);
            } else {
              defaultState.reviews = reviewResults;
              defaultState.visibleReviews = reviewResults.length;
              callback(null, defaultState);
            }
          });
        }
      });
    }
  });
};

module.exports = {
  sendRoomsDefaultState,
  findRoom,
  findGroupOfReviews,
  findNumOfTotalReviews,
  visibleReviews,
};

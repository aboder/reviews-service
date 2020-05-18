const Room = require('./database/models/Room.js');
const Review = require('./database/models/Review.js');

const visibleReviews = 4;

const findNumOfTotalReviews = (roomid, callback) => {
  Review.find({ roomid: roomid }, { roomid: 0, _id: 0, __v: 0 })
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
  Room.findOne({ id: roomid }, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const findGroupOfReviews = (roomid, reviewgroup, callback) => {
  Review.find({ roomid: roomid }, { roomid: 0, _id: 0, __v: 0 })
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
    } else if (roomResults === null) {
      callback('No room results found');
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

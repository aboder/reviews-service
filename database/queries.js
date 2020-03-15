const mongoose = require('mongoose');
const Rooms = require('./Room.js');

var findReviewsForRoomAndGroup = (roomid, reviewgroup, callback) => {
    Rooms.findOne({id: roomid}, (err, room) => {
        if (err) {
            callback(err)
        } else {
        // the user is able to request a sub-section of room reviews using a query param stylized as such: '?reviewgroup='.
            var selReviewGroup = Number(reviewgroup);
            var maxNumOfReviewsInAGroup = 5;

            if (isNaN(selReviewGroup)) {
                room.reviews = room.reviews.slice(0, maxNumOfReviewsInAGroup);
            } else {
                var selReviewGroupIsWithinBounds = (selReviewGroup + 1) * maxNumOfReviewsInAGroup <= room.reviews.length;
                selReviewGroup = selReviewGroupIsWithinBounds ? selReviewGroup : 0 ;
                var reviewsStart = selReviewGroup * maxNumOfReviewsInAGroup;
                var reviewsEnd = (selReviewGroup + 1) * maxNumOfReviewsInAGroup;

                room.reviews = room.reviews.slice(reviewsStart, reviewsEnd);
            }
            callback(null, room);
        }
    })
}

  module.exports = findReviewsForRoomAndGroup;
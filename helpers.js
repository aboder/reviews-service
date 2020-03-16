const mongoose = require('mongoose');
const Rooms = require('./database/Room.js');

var cachedRoom = {};
var maxNumOfReviewsInAGroup = 5;

var findAndCacheRoom = (roomid, callback) => {
    if (cachedRoom.id === roomid) {
        callback(null, cachedRoom)
    } else {
        Rooms.findOne({id: roomid}, (err, room) => {
            if (err) {
                callback(err)
            } else {
                cachedRoom = room;
                callback(null, cachedRoom)
            }
        })
    }
}

var findReviewsForGroup = (selReviewGroup, callback) => {
    var selReviewGroup = Number(selReviewGroup);
    var reviews = []
    if (isNaN(selReviewGroup)) {
        reviews = cachedRoom.reviews.slice(0, maxNumOfReviewsInAGroup);
    } else {
        var selReviewGroupIsWithinBounds = (selReviewGroup + 1) * maxNumOfReviewsInAGroup <= cachedRoom.numOfReviews;
        selReviewGroup = selReviewGroupIsWithinBounds ? selReviewGroup : 0 ;
        var reviewsStart = selReviewGroup * maxNumOfReviewsInAGroup;
        var reviewsEnd = reviewsStart + maxNumOfReviewsInAGroup;

        reviews = cachedRoom.reviews.slice(reviewsStart, reviewsEnd);
    }
    callback(null, reviews);
}


module.exports = {
    findAndCacheRoom,
    findReviewsForGroup,
}



// var findReviewsForRoomAndGroup = (roomid, reviewgroup, callback) => {
//     Rooms.findOne({id: roomid}, (err, room) => {
//         if (err) {
//             callback(err)
//         } else {
//         // the user is able to request a sub-section of room reviews using a query param stylized as such: '?reviewgroup='.
//             var selReviewGroup = Number(reviewgroup);
//             var maxNumOfReviewsInAGroup = 5;

//             if (isNaN(selReviewGroup)) {
//                 room.reviews = room.reviews.slice(0, maxNumOfReviewsInAGroup);
//             } else {
//                 var selReviewGroupIsWithinBounds = (selReviewGroup + 1) * maxNumOfReviewsInAGroup <= room.reviews.length;
//                 selReviewGroup = selReviewGroupIsWithinBounds ? selReviewGroup : 0 ;
//                 var reviewsStart = selReviewGroup * maxNumOfReviewsInAGroup;
//                 var reviewsEnd = reviewsStart + maxNumOfReviewsInAGroup;

//                 room.reviews = room.reviews.slice(reviewsStart, reviewsEnd);
//             }
//             callback(null, room);
//         }
//     })
// }
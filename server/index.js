const express = require('express');
const mongoose = require('mongoose');
const Rooms = require('../database/Room.js');

const app = express()
const PORT = 3000;

app.use(express.json())

app.get('/api/reviews/:roomid/', (req, res) => {
  // var selReviewGroup = Number(req.query.reviewgroup);
  // var maxNumOfReviewsInAGroup = 5;
  // Rooms.find({id: req.params.roomid})
  //   .select(reviews)
  //   .skip(selReviewGroup * maxNumOfReviewsInAGroup)
  //   .limit(maxNumOfReviewsInAGroup)

  Rooms.find({id: req.params.roomid}, (err, room) => {
    if (err) {
      res.sendStatus(500);
    } else {
      //the user is able to request a sub-section of room reviews using a query param stylized as such: '?reviewgroup='.
      var roomReviews = room[0].reviews;
      var selReviewGroup = Number(req.query.reviewgroup);
      var maxNumOfReviewsInAGroup = 5;
      var selReviewGroupIsWithinBounds = (selReviewGroup + 1) * maxNumOfReviewsInAGroup <= roomReviews.length;

      //if they did provide a query param and it's within bounds
      if (selReviewGroup !== undefined && selReviewGroupIsWithinBounds) {
        //then they are sent the sub-section of reviews corresponding to the selected review group #
        var reviewsStart = selReviewGroup * maxNumOfReviewsInAGroup;
        var reviewsEnd = (selReviewGroup + 1) * maxNumOfReviewsInAGroup;

        roomReviews = roomReviews.splice(reviewsStart, reviewsEnd);
        res.send(room);
      } else {
        //otherwise they are just given the first five reviews.
        roomReviews = roomReviews.splice(0, 5);
        res.send(room)
      }
    }
  })
})

app.listen(PORT, console.log(`Listening on port: ${PORT}`))
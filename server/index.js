const express = require('express');
const findReviewsForRoomAndGroup = require('../database/queries.js');
const app = express()
const PORT = 3000;

app.use(express.json())

app.get('/api/reviews/:roomid/', (req, res) => {
  findReviewsForRoomAndGroup(req.params.roomid, req.query.reviewgroup, (err, reviews) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send(reviews)
    }
  })
})

app.listen(PORT, console.log(`Listening on port: ${PORT}`))
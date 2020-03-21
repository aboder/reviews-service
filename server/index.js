const express = require('express');
const path = require('path');
const Promise = require('bluebird');
const findRoomAndReviews = require('./util.js');
const collections = require('../database/RoomAndReview.js');


const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, '..', '/public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/api/reviews/:roomid/', (req, res) => {
  const { roomid } = req.params;
  const { reviewgroup } = req.query;
  findRoomAndReviews(roomid, reviewgroup, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else if (result.reviews.length === 0) {
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, console.log(`Listening on port: ${PORT}`));

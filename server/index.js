const express = require('express');
const path = require('path');
const helpers = require('../helpers.js');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, '..', '/public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/api/reviews/:roomid/', (req, res) => {
  helpers.findAndCacheRoom(req.params.roomid, (err, room) => {
    if (err) {
      res.sendStatus(500);
    } else {
      helpers.findReviewsForGroup(req.query.reviewgroup, (err, reviews) => {
        if (err) {
          res.sendStatus(500);
        } else {
          room.reviews = reviews;
          res.send(room);
        }
      });
    }
  });
});

app.listen(PORT, console.log(`Listening on port: ${PORT}`));

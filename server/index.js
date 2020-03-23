const express = require('express');
const path = require('path');
const util = require('./util.js');

const app = express();
const PORT = 3001;
const PUBLIC_DIR = path.join(__dirname, '..', '/public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/api/reviews/:roomid/', (req, res) => {
  const { roomid } = req.params;
  const { reviewgroup } = req.query;
  if (reviewgroup === undefined) {
    util.sendRoomsDefaultState(roomid, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  } else {
    util.findGroupOfReviews(roomid, reviewgroup, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else if (result.length === 0) {
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  }
});

app.listen(PORT, console.log(`Listening on port: ${PORT}`));

const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err);
  });


const db = mongoose.connection;

module.exports = db;

const mongoose = require('mongoose');

const mongoUri = 'mongodb://database:27017/';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err);
  });


const db = mongoose.connection;

module.exports = db;

const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    throw new Error('Failed to connect to mongo database: rooms');
  }
  console.log('Connected to mongo database: rooms');
});

const db = mongoose.connection;

module.exports = db;

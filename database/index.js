const mongoose = require('mongoose');

// const mongoUri = 'mongodb://172.17.0.3:27017/';

// for docker-compose...
// const mongoUri = 'mongodb://database:27017/';

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

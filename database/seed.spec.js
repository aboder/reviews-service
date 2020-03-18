const mongoose = require('mongoose');
const seed = require('./seed.js');
const dbCollections = require('./RoomAndReview.js');
const util = require('./util.js');

describe('database is successfully seeded', () => {
  let connection;
  let db;
  beforeAll(() => {
    connection = mongoose.connect('mongodb://localhost/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .catch((err) => {
        console.error(err);
      });
    db = mongoose.connection;
    dbCollections.Room.deleteMany({});
    dbCollections.Review.deleteMany({});
  });
  afterAll(() => {
    connection.close();
    db.close();
  });

  test('insertRoomsAndReviews to insert docs in the appropriate collections', () => {
    dbCollections.Room.create(util.generate100Rooms());
    dbCollections.Review.create(util.generate5000Reviews());
    dbCollections.Room.find({})
      .then(res => expect(res).toHaveLength(100));
    dbCollections.Review.find({})
      .then(res => expect(res).toHaveLength(5000));
  });
});

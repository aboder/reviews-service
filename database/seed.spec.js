const mongoose = require('mongoose');
const seed = require('./seed.js');
const dbCollections = require('./RoomAndReview.js');
const util = require('./util.js');

describe('db manipulation', () => {
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
  });
  afterAll(() => {
    dbCollections.Room.deleteOne({ id: 666 });
    dbCollections.Review.deleteOne({ roomid: 666 });
    connection.close();
    db.close();
  });

  test('should inserts docs into the collections', () => {
    const mockRoom = {
      id: 666,
      rating: {
        overall: 1,
        accuracy: 1,
        location: 1,
        cleanliness: 1,
        communication: 1,
        checkIn: 1,
        value: 1,
      },
    };
    const mockReview = {
      roomid: 666,
      author: 'Satan',
      authorsAvatar: 'hell.yahoo.com/img/Satan',
      createdAt: '2020-03-04T10:00:04.542Z',
      text: 'Worship me',
    };

    dbCollections.Room.create(mockRoom);
    dbCollections.Review.create(mockReview);
    dbCollections.Room.findOne({ id: 666 })
      .then((insertedRoom) => expect(insertedRoom).toEqual(mockRoom))
      .catch(console.log);

    dbCollections.Review.findOne({ roomid: 666 })
      .then((insertedReview) => expect(insertedReview).toEqual(mockReview))
      .catch(console.log);
  });
});

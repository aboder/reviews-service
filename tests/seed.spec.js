const mongoose = require('mongoose');
const Review = require('../database/models/Review.js');
const Room = require('../database/models/Room.js');

describe('db manipulation', () => {
  let connection;
  let db;
  beforeAll(() => {
    connection = mongoose.connect('mongodb://database:27017/aboder', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .catch((err) => {
        console.error(err);
      });
    db = mongoose.connection;
  });
  afterAll(() => {
    Room.deleteOne({ id: 666 })
      .then(console.log)
      .catch(console.log);

    Review.deleteOne({ id: 666 })
      .then(console.log)
      .catch(console.log);
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

    Room.create(mockRoom);
    Review.create(mockReview);

    Room.findOne({ id: 666 })
      .then((insertedRoom) => expect(insertedRoom).toEqual(mockRoom))
      .catch(console.log);

    Review.findOne({ roomid: 666 })
      .then((insertedReview) => expect(insertedReview).toEqual(mockReview))
      .catch(console.log);
  });
});

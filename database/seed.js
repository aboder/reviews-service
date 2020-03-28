const dbCollections = require('./RoomAndReview.js');
const util = require('./util.js');

const insertRoomsAndReviews = () => {
  dbCollections.Room.create(util.generate100Rooms());
  dbCollections.Review.create(util.generate5000Reviews());
  console.log('Database seeded');
};

insertRoomsAndReviews();

module.export = {
  insertRoomsAndReviews,
};

const faker = require('faker');
const collections = require('./Room.js');


const generate5000Reviews = () => {
  const results = [];
  for (let i = 0; i < 5000; i += 1) {
    const randomReview = {
      roomid: i % 100,
      author: faker.name.firstName(),
      authorsAvatar: faker.image.imageUrl(),
      createdAt: faker.date.past(5),
      text: faker.lorem.sentences(3, 3),
    };
    results.push(randomReview);
  }
  return results;
};

const generateAverageRating = () => {
  const randomAverageRating = {
    accuracy: faker.random.number({ min: 1, max: 5 }),
    location: faker.random.number({ min: 1, max: 5 }),
    cleanliness: faker.random.number({ min: 1, max: 5 }),
    communication: faker.random.number({ min: 1, max: 5 }),
    checkIn: faker.random.number({ min: 1, max: 5 }),
  };
  let overallRating = 0;
  let length = 0;
  const ratingKeys = Object.keys(randomAverageRating);
  for (let i = 0; i < ratingKeys.length; i += 1) {
    overallRating += randomAverageRating[ratingKeys[i]];
    length += 1;
  }
  randomAverageRating.overall = overallRating / length;
  return randomAverageRating;
};

const generate100Rooms = () => {
  const results = [];
  for (let i = 0; i < 100; i += 1) {
    const randomRoom = {
      id: i,
      rating: generateAverageRating(),
    };
    results.push(randomRoom);
  }
  return results;
};

const insertRoomsAndReviews = () => {
  collections.roomModel.create(generate100Rooms());
  collections.reviewModel.create(generate5000Reviews());
};

insertRoomsAndReviews();

module.exports = {
  generate5000Reviews,
  generateAverageRating,
  generate100Rooms,
  insertRoomsAndReviews,
};

const faker = require('faker');
const Room = require('./Room.js');


const generate50Reviews = () => {
  const results = [];
  for (let i = 0; i < 50; i += 1) {
    const randomReview = {
      reviewee: faker.name.firstName(),
      revieweeAvatar: faker.image.imageUrl(),
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
      reviews: generate50Reviews(),
      rating: generateAverageRating(),
    };
    randomRoom.numOfReviews = randomRoom.reviews.length;
    results.push(randomRoom);
  }
  return results;
};

const insertRooms = () => {
  Room.create(generate100Rooms());
};

insertRooms();

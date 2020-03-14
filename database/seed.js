const db = require('./index.js');
const Room = require('./Room.js');
const faker = require('faker');

const generate50Reviews = () => {
  var results = [];
  for (var i = 0; i < 50; i++) {
    var randomReview = {
      reviewee: faker.name.firstName(),
      revieweeAvatar: faker.image.imageUrl(),
      createdAt: faker.date.past(5),
      text: faker.lorem.sentences(3,3)
    };
    results.push(randomReview)
  }
  return results;
}

generateAverageRating = () => {
  var randomAverageRating = {
    overall: faker.random.number({min:1, max:5}),
    accuracy: faker.random.number({min:1, max:5}),
    location: faker.random.number({min:1, max:5}),
    cleanliness: faker.random.number({min:1, max:5}),
    communication: faker.random.number({min:1, max:5}),
    checkIn: faker.random.number({min:1, max:5})
  }
  return randomAverageRating
}

const generate100Rooms = () => {
  results = []
  for (var i = 0; i < 100; i++) {
    var randomRoom = {
      id: i,
      reviews: generate50Reviews(),
      rating: generateAverageRating(),
    }
    results.push(randomRoom)
  }
  return results
}

const insertRooms = () => {
  Room.create(generate100Rooms())
}

insertRooms();
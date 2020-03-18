const seedFunctions = require('./seed.js');

test('generate5000Reviews should generate an array containing 5000 objects', () => {
  expect(seedFunctions.generate5000Reviews()).toHaveLength(5000);
});

test('generateAverageRating should generate an object with the correct properties', () => {
  expect(seedFunctions.generateAverageRating()).toMatchObject({
    accuracy: expect.any(Number),
    location: expect.any(Number),
    cleanliness: expect.any(Number),
    communication: expect.any(Number),
    checkIn: expect.any(Number),
    overall: expect.any(Number),
  });
});

test('generate100Rooms should generate an array containing 100 objects', () => {
  expect(seedFunctions.generate100Rooms()).toHaveLength(100);
})
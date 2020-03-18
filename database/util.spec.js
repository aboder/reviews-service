const seedUtils = require('./util.js');

describe('seeding functions generate appropriate data', () => {
  test('generate5000Reviews should generate an array containing 5000 objects', () => {
    expect(seedUtils.generate5000Reviews()).toHaveLength(5000);
  });

  test('generateAverageRating should generate an object with the correct properties', () => {
    expect(seedUtils.generateAverageRating()).toMatchObject({
      accuracy: expect.any(Number),
      location: expect.any(Number),
      cleanliness: expect.any(Number),
      communication: expect.any(Number),
      checkIn: expect.any(Number),
      overall: expect.any(Number),
    });
  });

  test('generate100Rooms should generate an array containing 100 objects', () => {
    expect(seedUtils.generate100Rooms()).toHaveLength(100);
  });
});

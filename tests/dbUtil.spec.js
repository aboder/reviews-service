const generators = require('../database/utils/generateData.js');

describe('seeding functions', () => {
  test('generate5000Reviews should generate an array containing 5000 objects', () => {
    expect(generators.generate5000Reviews()).toHaveLength(5000);
  });

  test('generateAverageRating should generate an object with the correct properties', () => {
    expect(generators.generateAverageRating()).toMatchObject({
      communication: expect.any(Number),
      location: expect.any(Number),
      value: expect.any(Number),
      accuracy: expect.any(Number),
      cleanliness: expect.any(Number),
      checkin: expect.any(Number),
      overall: expect.any(Number),
    });
  });

  test('generate100Rooms should generate an array containing 100 objects', () => {
    expect(generators.generate100Rooms()).toHaveLength(100);
  });
});

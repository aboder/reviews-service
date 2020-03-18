const seedFunctions = require('./seed.js');

test('it should generate an array containing 5000 objects', () => {
  expect(seedFunctions.generate5000Reviews()).toHaveLength(5000);
})
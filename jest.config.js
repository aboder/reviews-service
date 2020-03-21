const path = require('path');

const ROOT_DIR = path.resolve(__dirname);

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js',
    path.resolve(ROOT_DIR, './tests/setupTests.js'),
  ],
};

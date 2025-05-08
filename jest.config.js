module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.test.js'], 
    testEnvironment:"jest-environment-jsdom",
  };
  
module.exports = {
  testEnvironment: "jsdom",
  resetMocks: false,
  setupFilesAfterEnv: ["./jest.setup.js"],
  transformIgnorePatterns: ['node_modules/(?!uuid)/"'],
};

// export default {
//   testEnvironment: "jsdom",
//   resetMocks: false,
//   setupFilesAfterEnv: ["./jest.setup.js"],
//   transformIgnorePatterns: ['node_modules/(?!uuid)/"'],
// };

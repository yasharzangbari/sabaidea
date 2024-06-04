module.exports = {
  testEnvironment: "jsdom",
  resetMocks: false,
  setupFilesAfterEnv: ["./jest.setup.js"],
  transformIgnorePatterns: ['node_modules/(?!uuid)/"'],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

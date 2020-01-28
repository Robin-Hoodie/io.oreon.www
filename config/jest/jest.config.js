const path = require("path");

module.exports = {
  rootDir: "../../",
  transform: {
    "^.+\\.tsx?$": "<rootDir>/config/jest/jest.preprocess.js"
  }
};

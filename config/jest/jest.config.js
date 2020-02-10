module.exports = {
  rootDir: "../../",
  transform: {
    "^.+\\.tsx?$": "<rootDir>/config/jest/jest.preprocess.js"
  },
  //Mock static file imports, Jest can't handle these
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    "@src\/(.*)$": "<rootDir>/src/$1" // Allow referring to @src, equivalent to webpack's "@src" alias
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  //Normally set by Gatsby
  globals: {
    __PATH_PREFIX__: "",
  },
  setupFiles: [
    "<rootDir>/config/jest/setupFile.js"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/config/jest/setupFileAfterEnv.js"
  ]
};

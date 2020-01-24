/* eslint-disable */
const path = require("path");

module.exports = () =>  {
  return {
    entry: {
      "contact-form-email": path.resolve(__dirname, "./src/contact-form-email/contact-form-email.ts")
    },
    context: path.resolve(__dirname, "./functions"),
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, "./dist")
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    target: "node",
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [ "@babel/preset-typescript"]
              }
            }
          ]
        }
      ]
    }
  }
};

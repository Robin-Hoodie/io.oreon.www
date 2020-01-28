const path = require("path");
const relativePathToFunctionsDir = "../../functions";

module.exports = () => {
  return {
    entry: {
      "contact-form-email": path.resolve(__dirname, `${relativePathToFunctionsDir}/src/contact-form-email/contact-form-email.ts`)
    },
    context: path.resolve(__dirname, relativePathToFunctionsDir),
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, `${relativePathToFunctionsDir}/dist`)
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
                presets:
                  [
                    ["@babel/preset-env", {
                      targets: {
                        // Netlify functions run in a Node 12 env
                        node: "12"
                      }
                    }
                    ],
                    "@babel/preset-typescript"
                  ]
              }
            }
          ]
        }
      ]
    }
  };
};

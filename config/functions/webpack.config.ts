import path from "path";
import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const relativePathToFunctionsDir = "../../functions";

module.exports = (): webpack.Configuration => {
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
      extensions: [".ts", ".js"],
      alias: {
        "@src": path.resolve(__dirname, "../../functions/src")
      },
      symlinks: false //We don't use symlinked modules, this improves performance
    },
    target: "node",
    plugins: [
      new CleanWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: path.resolve(__dirname, relativePathToFunctionsDir),
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

/* eslint-disable */
const path = require("path");

const env = process.env.NODE_ENV;

module.exports = {
  siteMetadata: {
    title: "Oreon",
    description: "Personal website for Oreon",
    author: "Robin-Hoodie",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve(__dirname, "src/data"),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Oreon Company Website",
        short_name: "Oreon",
        start_url: "/",
        background_color: "black",
        theme_color: "black",
        display: "minimal-ui",
        icon: "src/data/images/icon.png", // This path is relative to the root of the site.,
      },
    },
    "gatsby-plugin-typescript", // Transform typescript with @babel/preset-typescript
    {
      resolve: "gatsby-plugin-eslint", // Log linting errors
      options: {
        test: /\.js$|\.tsx$|\.ts$/,
      },
    },
    {
      resolve: "@robinhoodie/gatsby-plugin-webpack-bundle-analyzer",
      options: {
        disable: env !== "production", // We don't care about the bundle size in development
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "reports/bundle-analyzer.html"
      }
    },
    {
      resolve: "gatsby-plugin-babel-plugin-typescript-to-proptypes",
      options: {
        disable: env === "production"
      }
    }
  ]
};

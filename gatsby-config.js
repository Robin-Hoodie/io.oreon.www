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
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
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
        icon: "src/images/icon.png", // This path is relative to the root of the site.,
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.tsx$|\.ts$/,
      },
    },
    {
      resolve: "@robinhoodie/gatsby-plugin-webpack-bundle-analyzer",
      options: {
        // We don't care about the bundle size in development
        disable: env !== "production",
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "reports/bundle-analyzer.html"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
};

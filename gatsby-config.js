/* global module, __dirname */
/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: "Oreon",
    description: "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
};

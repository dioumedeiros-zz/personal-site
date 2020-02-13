/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: "Faizi Agency",
    description: "Artist Agency was founded in 1977 by founder, John Doe. AA continues to be at the forefront of art by establishing the careers of our talents on a holistic level -- and setting trends within the industry.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        schema: {
          timeout: 3000000,
        },
        url: "http://cms-development.ismatfaizi.gpro.apstudent.be/graphql",
      },
    },
  ],
};
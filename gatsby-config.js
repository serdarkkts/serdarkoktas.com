require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Serdar KÖKTAS`,
    siteHeadline: `Serdar KÖKTAŞ | Personal Website, blog.`,
    siteTitleAlt: `Serdar KÖKTAŞ - DevOps Engineer`,
    siteDescription: `Serdar KÖKTAŞ | Personal Website, blog.`,
    siteImage: `/banner.jpg`,
    siteUrl: `https://serdarkoktas.com/`,
    author: `@serdarkkts`,
    navigation: [
      {
        title: `About`,
        slug: `/about`,
      },
      {
        title: `Blog`,
        slug: `/blog`,
      },
    ],
    externalLinks: [
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/serdarkkts`
      },
      {
        name: `Github`,
        url: `https://www.github.com/serdarkkts/`
      }
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-161551341-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Serdar KÖKTAŞ`,
        short_name: `Serdar`,
        description: `Personal Website,blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}

module.exports = {
  siteMetadata: {
    title: "Alex Goretoy - Solutions Architect/Developer Portfolio",
    author: "Alex Goretoy",
    description: "Alex Goretoy is a web developer and web solutions architect, specializing in Linux, AWS, DevOps and Full-Stack Web Development using Python, Node.js, PHP, Java, React.js and Angular.js"
  },
  pathPrefix: "/",

  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-38033052-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`librebaskerville`, `open sans`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ]
};

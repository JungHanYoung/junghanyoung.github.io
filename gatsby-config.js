module.exports = {
  siteMetadata: {
    title: `Hanyoung's DevLog`,
    description: `개발과 관련되어 확인한 개념이나 트릭들을 정리하는 곳입니다!`,
    author: `JeongHanYoung`,
    disqus: {
      disqusShortname: "junghanyoung-github-io"
    }
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hanyoung' Devook`,
        short_name: `Web Developer`,
        start_url: `/githubpage-with-gatsby`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-embed-youtube`,
          `gatsby-remark-graphviz`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-custom-blocks`,
            options: {
              blocks: {
                collapse: {
                  title: "optional",
                  details: true
                }
              }
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {

            }
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}

module.exports = {
  siteMetadata: {
    siteTitle: 'Personal web site',
    siteTitleAlt: 'Personal web site - Workshop Gatsby',
    siteHeadline: 'Personal web site - Workshop Gatsby',
    siteUrl: 'https://your-url.com',
    siteDescription:
      'Playful and Colorful One-Page portfolio featuring Parallax effects and animations',
    siteLanguage: 'en',
    siteImage: '/banner.jpg',
    author: 'MakeItReal Students',
    basePath: '/',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sections',
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};

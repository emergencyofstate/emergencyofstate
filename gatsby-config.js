module.exports = {
  siteMetadata: {
    title: 'Some Stuff is Good',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://headless/',
        apiBase: 'api', //optional, default to jsaonapi
        //baseUrl: `https://live-contentacms.pantheonsite.io/`,
        //apiBase: `api`, // optional, defaults to `jsonapi`
      },
    },
  ],
};

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const videoPostTemplate = path.resolve(`src/templates/video-post.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `{
           allVideos(limit: 1000) {
             edges {
               node {
                 id
                 title
                 path {
                   alias
                 }
                 video {
                  input
                  video_id
                }
               }
             }
           }
         }`
      )
        .then(result => {

        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each video entity
        result.data.allVideos.edges.forEach(({ node }) => {
          const path = node.path.alias;
          const url = node.video.video_id;
          createPage({
            path,
            url,
            component: videoPostTemplate,

            // If you have a layout component at src/layouts/***-layout.js
            //layout: `video-layout`,

            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path,
              url,
            },
          });
        });
      })
    );
  });
};
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({graphql, actions}) => {
    const result = await graphql(`
    {
        allFile(filter: { extension: { eq: "md" }}) {
          edges {
            node {
              relativePath
              name
            }
          }
        }
      }
    `)
    result.data.allFile.edges.forEach(({node}) => {
        actions.createPage({
            path: node.name,
            component: require.resolve('./src/templates/post.js'),
            context: {relativePath: node.relativePath}
        })
    })
}
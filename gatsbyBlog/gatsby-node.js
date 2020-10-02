const { createFilePath } = require("gatsby-source-filesystem")
const { path } = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  //   console.log(node.internal.type)
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  //const blogPostTemplate = path.resolve("./src/layouts/BlogpostLayout.js")
  return graphql(`
    {
      allWordpressPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: `${node.slug}`,
        component: require.resolve("./src/layouts/BlogpostLayout.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}

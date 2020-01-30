const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }`);
  results.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: require.resolve("./src/templates/blog-template.tsx"),
      path: edge.node.fields.slug,
      context: {
        title: edge.node.frontmatter.title
      }
    });
  });
};

// Add the path for every markdown file based on the filesystem path
exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === "MarkdownRemark") {
    const path = createFilePath({ node, getNode, basePath: "src/data/content" });
    createNodeField({
      node,
      name: "slug",
      value: `/blog${path}`
    });
  }
};

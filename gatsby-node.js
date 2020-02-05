const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const {data} = await graphql(`{
    allMarkdownRemark {
      blogs: nodes {
        id
        fields {
          slug
        }
      }
    }
  }`);
  data.allMarkdownRemark.blogs.forEach(blog => {
    createPage({
      component: require.resolve("./src/components/blog/blog-template.tsx"),
      path: blog.fields.slug,
      context: {
        id: blog.id
      }
    });
  });
};

exports.onCreatePage = ({page, actions: {createPage, deletePage}}) => {
  if (page.path.includes("blog-list")) {
    deletePage(page);
    createPage({
      ...page,
      path: "/blog/", // I don't think the default of "blog-list" looks nice as a URL
    });
  }
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

exports.onCreateWebpackConfig = ({actions: {setWebpack}}) => {

}

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

const GATSBY_STAGES = {
  develop: "develop",
  developHtml: "develop-html",
  buildJavascript: "build-javascript",
  buildHtml: "build-html"
};

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
      component: require.resolve("./src/templates/blog-template.tsx"),
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

exports.onCreateWebpackConfig = ({
  stage,
  actions: {setWebpackConfig},
}) => {
  if (stage === GATSBY_STAGES.develop ||
    stage === GATSBY_STAGES.buildJavascript ||
    stage === GATSBY_STAGES.buildHtml) {
    setWebpackConfig({
      resolve: {
        alias: {
          "@src": path.resolve(__dirname, "src")
        }
      }
    });
  }
};

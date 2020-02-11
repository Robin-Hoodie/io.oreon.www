const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
const colors = require("colors");
const rimraf = require("rimraf");

const GATSBY_STAGES = {
  develop: "develop",
  developHtml: "develop-html",
  buildJavascript: "build-javascript",
  buildHtml: "build-html"
};

const NODE_CONFIG_PREFIX = colors.yellow("gatsby-node.js");

// const PUBLIC_FOLDER = path.resolve(__dirname, 'public');

// exports.onPreBuild = () => {
//   console.log("Deleting public folder");
//   rimraf.sync(PUBLIC_FOLDER);
// };

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
    console.log(NODE_CONFIG_PREFIX, `Creating blog post page for path ${blog.fields.slug}`);
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
    const newPath = "/blog/";
    console.log(NODE_CONFIG_PREFIX, `Replacing path ${page.path} to ${newPath}`);
    deletePage(page);
    createPage({
      ...page,
      path: newPath, // I don't think the default of "blog-list" looks nice as a URL
    });
  }
};

// Add the path for every markdown file based on the filesystem path
exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === "MarkdownRemark") {
    const path = createFilePath({ node, getNode, basePath: "src/data/content" });
    const slug = `/blog${path}`;
    console.log(NODE_CONFIG_PREFIX, `Adding 'slug' field with value ${slug} to node for blog post with title '${node.frontmatter.title}'`);
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
    const alias = "@src";
    const pathToAliasTo = path.resolve(__dirname, "src");
    console.log(NODE_CONFIG_PREFIX, `Aliasing ${alias} to ${pathToAliasTo}`);
    setWebpackConfig({
      resolve: {
        alias: {
          [alias]: pathToAliasTo
        }
      }
    });
  }
};

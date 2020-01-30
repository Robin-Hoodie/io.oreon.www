import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";

export const query = graphql`{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
}`;

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              title: string;
            };
            fields: {
              slug: string;
            };
          };
        }
      ];
    };
  };
}

const Blog = ({data: {allMarkdownRemark: {edges: blogPosts}}}: BlogProps): JSX.Element => (
  <Layout>
    <SEO title="Blog" />
    <h1>BlogPosts</h1>
    <ul>
      {blogPosts.map(blogPost => (
        <li key={blogPost.node.id}>
          <Link to={blogPost.node.fields.slug}>
            {blogPost.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Blog;

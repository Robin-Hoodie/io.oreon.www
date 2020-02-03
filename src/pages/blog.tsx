import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import classes from "./blog.module.sass";
import BlogLink from "../components/blog/blog-link";

export const query = graphql`
{
  allMarkdownRemark(sort:{fields:[frontmatter___date], order:DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "D MMM YYYY")
          author
        }
        fields {
          slug
        }
        excerpt(pruneLength: 300)
      }
    }
  }
}
`;

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              title: string;
              date: string;
              author: string;
            };
            fields: {
              slug: string;
            };
            excerpt: string;
          };
        }
      ];
    };
  };
}

const Blog = ({ data: { allMarkdownRemark: { edges: blogPosts } } }: BlogProps): JSX.Element => (
  <Layout>
    <SEO title="Blog" />
    <h1 className={classes.title}>Latest Blog Posts</h1>
    <ul className={classes.blogList}>
      {blogPosts.map(blogPost => (
        <BlogLink
          key={blogPost.node.id}
          date={blogPost.node.frontmatter.date}
          truncatedText={blogPost.node.excerpt}
          link={blogPost.node.fields.slug}
          title={blogPost.node.frontmatter.title}
          author={blogPost.node.frontmatter.author} />
      ))}
    </ul>
  </Layout>
);

export default Blog;

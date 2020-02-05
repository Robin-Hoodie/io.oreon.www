import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import classes from "./blog-list.module.sass";
import BlogLink from "../components/blog/blog-link";
import { FixedObject } from "gatsby-image";

export const query = graphql`{
  allMarkdownRemark(sort: { fields:[ frontmatter___date ], order:DESC } ) {
    blogs: nodes {
      id
      excerpt(pruneLength: 300)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "D MMM YYYY")
        author
        image {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
}`;

interface BlogListProps {
  data: {
    allMarkdownRemark: {
      blogs: [
        {
          id: string;
          frontmatter: {
            title: string;
            date: string;
            author: string;
            image: {
              childImageSharp: {
                fixed: FixedObject;
              };
            };
          };
          fields: {
            slug: string;
          };
          excerpt: string;
        }
      ];
    };
  };
}

const BlogList = ({ data: { allMarkdownRemark: { blogs } } }: BlogListProps): JSX.Element => (
  <Layout>
    <SEO title="BlogList" />
    <h1 className={classes.title}>Latest Blog Posts</h1>
    <ul className={classes.blogList}>
      {blogs.map(blog => (
        <BlogLink
          key={blog.id}
          blog={blog}
          blogImage={blog.frontmatter.image.childImageSharp.fixed}/>
      ))}
    </ul>
  </Layout>
);

export default BlogList;

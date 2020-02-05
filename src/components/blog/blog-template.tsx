import React from "react";

import Layout from "../layout";
import SEO from "../seo";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import classes from "./blog-template.module.sass";

export const query = graphql`
query ($id: String!) {
  blog: markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "D MMM YYYY")
      author
    }
    content: rawMarkdownBody
  }
}`;

interface BlogProps {
  data: {
    blog: {
      frontmatter: {
        title: string;
        date: string;
        author: string;
      };
      content: string;
    };
  };
}

const BlogTemplate = ({ data: { blog } }: BlogProps): JSX.Element => (
  <Layout>
    <SEO title={`Blog: ${blog.frontmatter.title}`} />
    <h1 className={classes.blogTitle}>{blog.frontmatter.title}</h1>
    <div className={classes.blogDate}>By {blog.frontmatter.author} - {blog.frontmatter.date}</div>
    <ReactMarkdown
      source={blog.content}
      className={classes.blogContent} />
  </Layout>
);

export default BlogTemplate;

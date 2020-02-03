import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import classes from "./blog-template.module.sass";

export const query = graphql`query ($title: String!) {
  blog: markdownRemark(frontmatter: {title: {eq: $title} } ) {
    frontmatter {
      title
      date(formatString: "D MMM YYYY")
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
      };
      content: string;
    };
  };
}

const BlogTemplate = ({ data: { blog } }: BlogProps): JSX.Element => (
  <Layout>
    <SEO title={`Blog: ${blog.frontmatter.title}`} />
    <h1 className={classes.blogTitle}>{blog.frontmatter.title}</h1>
    <div className={classes.blogDate}>{blog.frontmatter.date}</div>
    <ReactMarkdown
      source={blog.content}
      className={classes.blogContent} />
  </Layout>
);

export default BlogTemplate;

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";

import classes from "./blog-template.module.sass";

export const query = graphql`query ($title: String!) {
  markdownRemark(frontmatter: {title: {eq: $title} } ) {
    html
    frontmatter {
      title
      date(formatString: "D MMM YYYY")
    }
  }
}`;

interface BlogProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

const BlogTemplate = ({ data: { markdownRemark } }: BlogProps): JSX.Element => (
  <Layout>
    <SEO title={`Blog: ${markdownRemark.frontmatter.title}`} />
    <Link
      to="/blog"
      className={classes.backLink}>&larr; Back to blog overview</Link>
    <h1 className={classes.blogTitle}>{markdownRemark.frontmatter.title}</h1>
    <div className={classes.blogDate}>{markdownRemark.frontmatter.date}</div>
    <article
      dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      className={classes.blogContent} />
  </Layout>
);

export default BlogTemplate;

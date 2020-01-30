import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

export const query = graphql`query ($title: String!) {
  markdownRemark(frontmatter: {title: {eq: $title} } ) {
    html
    frontmatter {
      title
    }
  }
}`;

interface BlogProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
}

const BlogTemplate = ({data: {markdownRemark}}: BlogProps): JSX.Element => (
  <Layout>
    <SEO title={`Blog: ${markdownRemark.frontmatter.title}`}/>
    <h1>{markdownRemark.frontmatter.title}</h1>
    <article dangerouslySetInnerHTML={{__html: markdownRemark.html}}/>
  </Layout>
);

export default BlogTemplate;

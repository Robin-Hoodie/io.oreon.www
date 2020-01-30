import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const Blog = (): JSX.Element => (
  <Layout>
    <SEO title="Blog" />
    <h1>BlogPosts</h1>
  </Layout>
);

export default Blog;

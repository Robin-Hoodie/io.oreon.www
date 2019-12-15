import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";

//TODO: Refactor to reducer state?
//TODO: Take out some common properties of links in variable map?
//TODO: Test mobile sidemenu width
const IndexPage = (): JSX.Element => (
  <>
    <Layout>
      <SEO title="Home" />
      <Banner/>
    </Layout>
  </>
);

export default IndexPage;

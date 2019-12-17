import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";

//TODO: Refactor to reducer state?
//TODO: Mobile sidemenu width is not okay on
//TODO: Mobile items need feedback on clicking them
//TODO: Use different visual cue for hvoering over links than buttons do
//TODO: Contact modal should be in middle of page vertically
//TODO: Update icon to something I can reuse
const IndexPage = (): JSX.Element => (
  <>
    <Layout>
      <SEO title="Home" />
      <Banner/>
    </Layout>
  </>
);

export default IndexPage;

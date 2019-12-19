import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

//TODO: Mobile toggle can be done as SVG
//TODO: Refactor to reducer state?
//TODO: Mobile sidemenu width is not okay on mobile phones
//TODO: Mobile items need feedback on clicking them
//TODO: Use different visual cue for hovering over links than buttons do
//TODO: Get logo to use as icon
const IndexPage = (): JSX.Element => (
  <>
    <Layout>
      <SEO title="Home" />
      <Banner/>
    </Layout>
  </>
);

export default IndexPage;

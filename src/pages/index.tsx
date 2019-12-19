import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

//TODO: Mobile toggle can be done as SVG
//TODO: Refactor to reducer state?
//TODO: Mobile sidemenu width is not okay on mobile phones
//TODO: Mobile items need feedback on clicking them
//TODO: Use different visual cue for hvoering over links than buttons do
//TODO: Contact modal should be in middle of page vertically
//TODO: Get logo to use as icon
//TODO: Slide mobile sidebar down instead of sideways? + animating mobile toggle icon
const IndexPage = (): JSX.Element => (
  <>
    <Layout>
      <SEO title="Home" />
      <Banner/>
    </Layout>
  </>
);

export default IndexPage;

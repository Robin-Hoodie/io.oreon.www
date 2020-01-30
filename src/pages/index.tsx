import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

const IndexPage = (): JSX.Element => (
  <>
    <Layout>
      <SEO title="Home" />
      <Banner/>
    </Layout>
  </>
);

export default IndexPage;


import React from "react";

import Layout from "@src/components/layout";
import SEO from "@src/components/seo";
import Banner from "@src/components/banner";

const IndexPage = (): JSX.Element => (
  <>
    <Layout>
      <SEO title="Home" />
      <Banner/>
    </Layout>
  </>
);

export default IndexPage;


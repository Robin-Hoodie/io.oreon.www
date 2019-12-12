import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";

const IndexPage = (): JSX.Element => (
  <>
    <Layout>
      <SEO title="Home" />
      <Banner/>
      <article>
        <section>
        </section>
      </article>
    </Layout>
  </>
);

export default IndexPage;

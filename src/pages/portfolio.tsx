import React from "react";
import Layout from "@src/components/layout";
import SEO from "@src/components/seo";

import classes from "@src/pages/portfolio.module.sass";

const Portfolio = (): JSX.Element => (
  <Layout>
    <SEO title="Portfolio"/>
    <main className={classes.portfolio}>
      <div>Placeholder image 1</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda, aut corporis dignissimos dolores hic incidunt, magnam maiores neque nihil odio porro saepe totam voluptas voluptates, voluptatibus. Minus, nesciunt.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam ea earum esse eveniet, facere hic incidunt, ipsam maxime nobis optio perferendis possimus praesentium, quod quos tempora tempore temporibus totam.</div>
      <div>Placeholder image 2</div>
    </main>
  </Layout>
);

export default Portfolio;

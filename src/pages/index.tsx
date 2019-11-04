import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import style from "./index.module.css";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <article className={style.mainContent}>
        Hi! <br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem eligendi exercitationem, non optio quisquam voluptas. Accusantium, quibusdam soluta. Ab architecto blanditiis cupiditate dicta dignissimos facilis incidunt laborum possimus repellendus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci autem corporis ducimus explicabo molestias tempora. Amet assumenda, doloribus ducimus earum ipsa laborum non nostrum possimus quaerat saepe veritatis voluptate?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor porro repellendus ullam. Alias cum cupiditate, deleniti earum enim eos ipsa ipsum laborum molestias odio praesentium quaerat quasi recusandae saepe.
    </article>
  </Layout>
);

export default IndexPage;

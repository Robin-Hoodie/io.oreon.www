/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Header from "./navigation/header";
import MobileMenu from "./navigation/mobile-menu";
import Backdrop from "./backdrop";

interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        onMobileToggle={(): void => setMobileMenuOpened(true)} />
      <MobileMenu
        opened={mobileMenuOpened} />
      <Backdrop
        show={mobileMenuOpened}
        onClick={(): void => setMobileMenuOpened(false)} />
      <section>
        {children}
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

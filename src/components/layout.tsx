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
import ContactModal from "./contact/contact-modal";

interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [contactModalOpened, setContactModelOpened] = useState(false);
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
        onContactButtonClicked={(): void => setContactModelOpened(true)}
        onMobileMenuButtonClicked={(): void => setMobileMenuOpened(true)}
        siteTitle={data.site.siteMetadata.title} />
      <MobileMenu
        opened={mobileMenuOpened}
        onContactButtonClicked={(): void => {
          setMobileMenuOpened(false);
          setContactModelOpened(true);
        }} />
      <ContactModal opened={contactModalOpened} />
      <Backdrop
        show={mobileMenuOpened || contactModalOpened}
        onClick={(): void => {
          setMobileMenuOpened(false);
          setContactModelOpened(false);
        }} />
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

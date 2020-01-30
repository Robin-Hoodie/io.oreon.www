/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useReducer } from "react";

import Header from "./navigation/header";
import MobileMenu from "./navigation/mobile-menu";
import Backdrop from "./backdrop";
import ContactModal from "./contact/contact-modal";

export type LayoutAction =
  { type: "CLOSE_MODAL" }
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MOBILE_MENU" }
  | { type: "TOGGLE_MOBILE_MENU" };

interface LayoutState {
  mobileMenuOpened: boolean;
  contactModalOpened: boolean;
}

const initialState: LayoutState = {
  mobileMenuOpened: false,
  contactModalOpened: false
};

const reducer = (state: LayoutState, action: LayoutAction): LayoutState => {
  switch (action.type) {
    case "CLOSE_MODAL":
      return {
        ...state,
        contactModalOpened: false
      };
    case "OPEN_MODAL":
      return {
        ...state,
        contactModalOpened: true
      };
    case "CLOSE_MOBILE_MENU":
      return {
        ...state,
        mobileMenuOpened: false
      };
    case "TOGGLE_MOBILE_MENU":
      return {
        ...state,
        mobileMenuOpened: !state.mobileMenuOpened
      };
    default:
      return state;
  }
};

interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
      <Backdrop
        opened={state.mobileMenuOpened || state.contactModalOpened}
        layoutDispatch={dispatch} />
      <ContactModal
        opened={state.contactModalOpened}
        layoutDispatch={dispatch} />
      <Header
        layoutDispatch={dispatch}
        siteTitle={data.site.siteMetadata.title} />
      <MobileMenu
        opened={state.mobileMenuOpened}
        layoutDispatch={dispatch}
      />
      <main>
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

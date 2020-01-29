import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Dispatch } from "react";

import "./header.sass";
import "./menu-item.sass";
import MobileMenuButton from "./mobile-menu-button";
import Brand from "./brand";
import { LayoutAction } from "../layout";

interface HeaderProps {
  layoutDispatch: Dispatch<LayoutAction>;
  siteTitle: string;
}

const Header = ({ layoutDispatch, siteTitle }: HeaderProps): JSX.Element => (
  <header className="header">
    <nav className="header__navigation-bar">
      <Brand siteTitle={siteTitle} />
      <Link
        to="/portfolio/"
        className="header__link"
        activeClassName="header__link--active">
        Portfolio
      </Link>
      <Link
        to="/blog/"
        className="header__link"
        activeClassName="header__link--active">
        Blog
      </Link>
      <button
        onClick={(): void => layoutDispatch({ type: "OPEN_MODAL" })}
        type="button"
        className="default-button header__cta">
        Work with me!
      </button>
      <MobileMenuButton
        onClick={(): void => layoutDispatch({ type: "TOGGLE_MOBILE_MENU" })} />
    </nav>
  </header>
);

Header.propTypes = {
  layoutDispatch: PropTypes.func.isRequired,
  siteTitle: PropTypes.string.isRequired
};

export default Header;

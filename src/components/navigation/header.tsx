import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.sass";
import "./menu-item.sass";
import MobileMenuButton from "./mobile-menu-button";
import Brand from "./brand";

interface HeaderProps {
  onContactButtonClicked: () => void;
  onMobileMenuButtonClicked: () => void;
  siteTitle: string;
}

const Header = ({ onContactButtonClicked, onMobileMenuButtonClicked, siteTitle }: HeaderProps): JSX.Element => (
  <header className="header">
    <nav className="header__navigation-bar">
      <Brand siteTitle={siteTitle} />
      <Link
        to="/portfolio/"
        className="header__link">
        Portfolio
      </Link>
      <Link
        to="/blog/"
        className="header__link">
        Blog
      </Link>
      <button
        onClick={onContactButtonClicked}
        type="button"
        className="default-button header__cta">
        Work with me!
      </button>
      <MobileMenuButton
        onClick={onMobileMenuButtonClicked} />
    </nav>
  </header>
);

Header.propTypes = {
  onContactButtonClicked: PropTypes.func.isRequired,
  onMobileMenuButtonClicked: PropTypes.func.isRequired,
  siteTitle: PropTypes.string.isRequired
};

export default Header;

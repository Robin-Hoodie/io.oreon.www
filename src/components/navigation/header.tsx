import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.sass";
import "./link.sass";
import MobileToggle from "./mobile-toggle";
import Brand from "./brand";

interface HeaderProps {
  siteTitle: string;
  onMobileToggle: () => void;
}

const Header = ({ siteTitle, onMobileToggle }: HeaderProps): JSX.Element => (
  <header>
    <nav className="header__navigation-bar">
      <Brand
        siteTitle={siteTitle}
        style={{ marginRight: "auto" }} />
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
      <Link
        to="/contact/"
        className="header__link--cta">
        Work with me!
      </Link>
      <MobileToggle onClick={onMobileToggle} />
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;

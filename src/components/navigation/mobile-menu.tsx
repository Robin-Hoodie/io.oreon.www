import React from "react";
import PropTypes from "prop-types";

import "./mobile-menu.sass";
import "./link.sass"
import { Link } from "gatsby";

interface MobileMenuProps {
  opened: boolean;
}

const MobileMenu = ({ opened = false}: MobileMenuProps): JSX.Element => {
  let classNames = "mobile-menu";
  if (opened) {
    classNames += " opened";
  }
  return (
    <nav className={classNames}>
      <Link
        to="/portfolio/"
        className="mobile-menu__link">
        Portfolio
      </Link>
      <Link
        to="/blog/"
        className="mobile-menu__link">
        Blog
      </Link>
      <Link
        to="/contact/"
        className="mobile-menu__link--cta">
        Work with me!
      </Link>
    </nav>
  );
};

MobileMenu.propTypes = {
  opened: PropTypes.bool.isRequired
};

export default MobileMenu;

import React from "react";
import PropTypes from "prop-types";

import "./mobile-menu.sass";
import "./menu-item.sass";
import { Link } from "gatsby";

interface MobileMenuProps {
  opened: boolean;
  onContactButtonClicked: () => void;
}

const MobileMenu = ({ opened = false, onContactButtonClicked }: MobileMenuProps): JSX.Element => {
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
      <button
        type="button"
        className="default-button mobile-menu__cta"
        onClick={onContactButtonClicked}>
        Work with me!
      </button>
    </nav>
  );
};

MobileMenu.propTypes = {
  opened: PropTypes.bool.isRequired,
  onContactButtonClicked: PropTypes.func.isRequired
};

export default MobileMenu;

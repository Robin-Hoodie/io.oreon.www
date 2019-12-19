import React, { Dispatch } from "react";
import PropTypes from "prop-types";

import "./mobile-menu.sass";
import "./menu-item.sass";
import { Link } from "gatsby";
import { LayoutAction } from "../layout";

interface MobileMenuProps {
  layoutDispatch: Dispatch<LayoutAction>;
  opened: boolean;
}

const MobileMenu = ({ layoutDispatch, opened = false }: MobileMenuProps): JSX.Element => {
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
        onClick={(): void => {
          layoutDispatch({type: "OPEN_MODAL"});
          layoutDispatch({type: "CLOSE_MOBILE_MENU"});
        }}>
        Work with me!
      </button>
    </nav>
  );
};

MobileMenu.propTypes = {
  layoutDispatch: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default MobileMenu;

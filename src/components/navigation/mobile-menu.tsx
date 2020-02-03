import React, { Dispatch } from "react";

import classes from "./mobile-menu.module.sass";
import { Link } from "gatsby";
import { LayoutAction } from "../layout";

interface MobileMenuProps {
  layoutDispatch: Dispatch<LayoutAction>;
  opened: boolean;
}

const MobileMenu = ({ layoutDispatch, opened = false }: MobileMenuProps): JSX.Element => {
  const classNames = [classes.mobileMenu];
  if (opened) {
    classNames.push(classes.opened);
  }
  return (
    <nav className={classNames.join(" ")}>
      <Link
        to="/portfolio/"
        className={classes.link}>
        Portfolio
      </Link>
      <Link
        to="/blog/"
        className={classes.link}>
        Blog
      </Link>
      <button
        type="button"
        className={`${classes.defaultButton} ${classes.cta}`}
        onClick={(): void => {
          layoutDispatch({type: "OPEN_MODAL"});
          layoutDispatch({type: "CLOSE_MOBILE_MENU"});
        }}>
        Work with me!
      </button>
    </nav>
  );
};

export default MobileMenu;

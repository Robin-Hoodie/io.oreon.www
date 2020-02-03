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
        className={classes.mobileLink}>
        Portfolio
      </Link>
      <Link
        to="/blog/"
        className={classes.mobileLink}>
        Blog
      </Link>
      <button
        type="button"
        className={`${classes.defaultButton} ${classes.mobileCta}`}
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

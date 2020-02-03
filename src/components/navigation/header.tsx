import { Link } from "gatsby";
import React, { Dispatch } from "react";

import classes from "./header.module.sass";
import MobileMenuButton from "./mobile-menu-button";
import Brand from "./brand";
import { LayoutAction } from "../layout";

interface HeaderProps {
  layoutDispatch: Dispatch<LayoutAction>;
  siteTitle: string;
}

const Header = ({ layoutDispatch, siteTitle }: HeaderProps): JSX.Element => (
  <header className={classes.header}>
    <nav className={classes.navigationBar}>
      <Brand siteTitle={siteTitle} />
      <Link
        to="/portfolio/"
        className={classes.headerLink}
        activeClassName={classes.headerLinkActive}>
        Portfolio
      </Link>
      <Link
        to="/blog/"
        className={classes.headerLink}
        partiallyActive={true}
        activeClassName={classes.headerLinkActive}>
        Blog
      </Link>
      <button
        onClick={(): void => layoutDispatch({ type: "OPEN_MODAL" })}
        type="button"
        className={`${classes.defaultButton} ${classes.headerCta}`}>
        Work with me!
      </button>
      <MobileMenuButton
        onClick={(): void => layoutDispatch({ type: "TOGGLE_MOBILE_MENU" })} />
    </nav>
  </header>
);

export default Header;

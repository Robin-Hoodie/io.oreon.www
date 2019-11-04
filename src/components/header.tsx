import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import style from "./header.module.css";

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps): JSX.Element => (
  <header className={style.header}>
      <Link
        to="/"
        className={style.brand}>
        {siteTitle}
      </Link>
      <div className={style.linkContainer}>
        <Link
          to="/portfolio/"
          className={style.headerLink}>
          Portfolio
        </Link>
        <Link
          to="/blog/"
          className={style.headerLink}>
          Blog
        </Link>
        <Link
          to="/contact/"
          className={style.callToAction}>
          Work with me
        </Link>
      </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;

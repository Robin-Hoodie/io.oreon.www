import React from "react";
import { Link } from "gatsby";

import classes from "./brand.module.sass";

interface BrandProps {
  siteTitle: string;
}

const Brand = ({ siteTitle }: BrandProps): JSX.Element => (
  <Link
    to="/"
    className={classes.brand}>
    {siteTitle}
  </Link>
);

export default Brand;

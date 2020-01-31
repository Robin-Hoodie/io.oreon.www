import React from "react";
import { Link } from "gatsby";

import "./brand.sass";

interface BrandProps {
  siteTitle: string;
}

const Brand = ({ siteTitle }: BrandProps): JSX.Element => (
  <Link
    to="/"
    className="brand">
    {siteTitle}
  </Link>
);

export default Brand;

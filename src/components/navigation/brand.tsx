import React from "react";
import PropTypes from "prop-types";
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

Brand.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default Brand;

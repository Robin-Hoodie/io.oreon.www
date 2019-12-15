import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./brand.sass";

interface BrandProps {
  siteTitle: string;
  style?: object;
}

const Brand = ({ siteTitle, style }: BrandProps): JSX.Element => (
  <Link
    to="/"
    className="brand"
    style={style}>
    {siteTitle}
  </Link>
);

Brand.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Brand;

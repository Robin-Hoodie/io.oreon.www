import React from "react";
import PropTypes from "prop-types";

import "./mobile-toggle.sass";

interface MobileToggleProps {
  onClick: () => void;
}


const MobileToggle = ({ onClick }: MobileToggleProps): JSX.Element => {
  return (
    <div
      className="mobile-toggle"
      onClick={onClick}>
      <div className="mobile-toggle__bar" />
      <div className="mobile-toggle__bar" />
      <div className="mobile-toggle__bar" />
    </div>
  );
};

MobileToggle.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MobileToggle;

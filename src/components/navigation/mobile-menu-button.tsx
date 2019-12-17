import React from "react";
import PropTypes from "prop-types";

import "./mobile-menu-button.sass";

interface MobileToggleProps {
  onClick: () => void;
}


const MobileMenuButton = ({ onClick }: MobileToggleProps): JSX.Element => {
  return (
    <div
      className="mobile-menu-button"
      onClick={onClick}>
      <div className="mobile-menu-button__bar" />
      <div className="mobile-menu-button__bar" />
      <div className="mobile-menu-button__bar" />
    </div>
  );
};

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MobileMenuButton;

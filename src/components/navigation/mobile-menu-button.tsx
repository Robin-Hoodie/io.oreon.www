import React from "react";

import "./mobile-menu-button.sass";

interface MobileToggleProps {
  onClick: () => void;
}


const MobileMenuButton = ({ onClick }: MobileToggleProps): JSX.Element => (
    <div
      data-testid="mobile-menu"
      className="mobile-menu-button"
      onClick={onClick}>
      <div className="mobile-menu-button__bar" />
      <div className="mobile-menu-button__bar" />
      <div className="mobile-menu-button__bar" />
    </div>
);

export default MobileMenuButton;

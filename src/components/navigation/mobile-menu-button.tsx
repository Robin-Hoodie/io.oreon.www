import React from "react";

import classes from "./mobile-menu-button.module.sass";

interface MobileToggleProps {
  onClick: () => void;
}


const MobileMenuButton = ({ onClick }: MobileToggleProps): JSX.Element => (
    <div
      data-testid="mobile-menu"
      className={classes.mobileMenuButton}
      onClick={onClick}>
      <div className={classes.mobileMenuButtonBar} />
      <div className={classes.mobileMenuButtonBar} />
      <div className={classes.mobileMenuButtonBar} />
    </div>
);

export default MobileMenuButton;

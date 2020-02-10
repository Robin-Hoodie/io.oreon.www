import React, { Dispatch } from "react";

import classes from "@src/components/backdrop.module.sass";
import { LayoutAction } from "@src/components/layout";

interface BackdropProps {
  opened: boolean;
  layoutDispatch: Dispatch<LayoutAction>;
}

const Backdrop = ({ opened = false, layoutDispatch }: BackdropProps): JSX.Element => {
  const classNames = [classes.backdrop];
  if (opened) {
    classNames.push(classes.opened);
  }
  return (
    <div
      onClick={(): void => {
        layoutDispatch({ type: "CLOSE_MODAL" });
        layoutDispatch({ type: "CLOSE_MOBILE_MENU" });
      }}
      className={classNames.join(" ")}>
    </div>
  );
};

export default Backdrop;

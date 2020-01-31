import React, { Dispatch } from "react";

import "./backdrop.sass";
import { LayoutAction } from "./layout";

interface BackdropProps {
  opened: boolean;
  layoutDispatch: Dispatch<LayoutAction>;
}

const Backdrop = ({ opened = false, layoutDispatch }: BackdropProps): JSX.Element => {
  let classNames = "backdrop";
  if (opened) {
    classNames += " opened";
  }
  return (
    <div
      onClick={(): void => {
        layoutDispatch({ type: "CLOSE_MODAL" });
        layoutDispatch({ type: "CLOSE_MOBILE_MENU" });
      }}
      className={classNames}>
    </div>
  );
};

export default Backdrop;

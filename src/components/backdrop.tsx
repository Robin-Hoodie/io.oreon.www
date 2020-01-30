import React, { Dispatch } from "react";
import PropTypes from "prop-types";

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

Backdrop.propTypes = {
  opened: PropTypes.bool.isRequired,
  layoutDispatch: PropTypes.func.isRequired
};

export default Backdrop;

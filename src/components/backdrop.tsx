import React from "react";
import PropTypes from "prop-types";

import "./backdrop.sass";

interface BackdropProps {
  show: boolean;
  onClick: () => void;
}

const Backdrop = ({ show = false, onClick }: BackdropProps): JSX.Element => {
  let classNames = "backdrop";
  if (show) {
    classNames += " opened";
  }
  return (
    <div
      onClick={onClick}
      className={classNames}>
    </div>
  );
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Backdrop;

import React from "react";
import ReactTooltip from "react-tooltip";
import PropTypes from "prop-types";

const Tooltip = props => {
  return (
    <ReactTooltip
      id={props.id}
      className="info-tooltip"
    >
      <span>{props.message}</span>
    </ReactTooltip>
  );
};

Tooltip.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string
}

export default Tooltip;

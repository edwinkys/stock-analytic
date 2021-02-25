import React from "react";
import PropTypes from "prop-types";

// Import components
import Tooltip from "../Tooltip/Tooltip";

const CardGridData = props => {
  return (
    <div className="flex flex-row justify-between">
      {
        props.tooltipId ?
        <span className="text-gray-lighter" data-tip data-for={props.tooltipId}>
          {props.label}
        </span> :
        <span className="text-gray-lighter">
          {props.label}
        </span>
      }
      <span className="ml-3 flex flex-end text-right overflow-auto no-scrollbar">
        {props.data}
      </span>
      {
        props.tooltipMessage ?
        <Tooltip id={props.tooltipId} message={props.tooltipMessage} /> :
        null
      }
    </div>
  );
};

CardGridData.propTypes = {
  label: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  tooltipId: PropTypes.string,
  tooltipMessage: PropTypes.string
}

export default CardGridData;

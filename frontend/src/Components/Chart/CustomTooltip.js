import React from "react";

// Import Util
import FixedDecimal from "../../Lib/FixedDecimal";

const CustomTooltip = props => {
  if (props.active && props.payload) {
    return (
      <div className="tooltip">
        <p className="flex text-xs text-gray-lighter mb-3">{props.label}</p>
        <p className="flex">${FixedDecimal(props.payload[0].value)}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

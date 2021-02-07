import React from 'react';

const CustomTooltip = props => {
  if (props.active && props.payload) {
    return (
      <div className="flex flex-col p-6 bg-gray-darker text-light rounded">
        <p className="flex text-xs text-gray-lighter mb-3">{props.label}</p>
        <p className="flex">${props.payload[0].value}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

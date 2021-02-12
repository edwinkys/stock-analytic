import React from 'react';
import PropTypes from 'prop-types';

// Import components
import Tooltip from '../Tooltip/Tooltip';

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
      <span>
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
  data: PropTypes.string,
  tooltipId: PropTypes.string,
  tooltipMessage: PropTypes.string
}

export default CardGridData;

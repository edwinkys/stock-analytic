import React from 'react';
import PropTypes from 'prop-types';

const Chip = props => {
  return (
    <button className={"btn chip" + (props.isActive ? " active" : "")} id={props.id} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

Chip.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

export default Chip;

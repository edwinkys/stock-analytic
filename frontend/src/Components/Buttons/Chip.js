import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Chip = props => {
  const [isChipActive, setChipActive] = useState(false);

  // Toggling chips
  const toggleChip = () => {
    setChipActive(!isChipActive);
  };

  // Function to run when the clips are clicked
  const chipOnClick = () => {
    toggleChip();
  };

  return (
    <button className={"btn chip" + (isChipActive ? " active" : "")} onClick={chipOnClick}>
      {props.children}
    </button>
  );
};

Chip.propTypes = {
  children: PropTypes.node
};

export default Chip;

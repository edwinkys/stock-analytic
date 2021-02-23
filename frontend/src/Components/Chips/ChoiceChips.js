import React, {useState} from "react";
import PropTypes from "prop-types";

// Import components
import Chip from "./Chip";

const periods = [
  {
    id: "1d"
  },
  {
    id: "5d"
  },
  {
    id: "1m"
  },
  {
    id: "3m"
  },
  {
    id: "1y"
  },
  {
    id: "5y"
  },
];

const ChoiceChips = props => {
  const [chipActiveId, setChipActiveId] = useState("3m");

  // Toggle chip active
  const chipActiveHandler = e => {
    const index = e.target.id;
    if (chipActiveId !== index) {
      setChipActiveId(index);
      sendPeriod(index);
    }
  };

  // Is chip active handler
  const isChipActiveHandler = id => (chipActiveId === id);

  // Callback Function
  const sendPeriod = (id) => {
    props.callback(id);
  };

  return (
    <div className={props.className}>
      {
        periods.map((val, index) => <Chip key={val.id} id={val.id} label={val.id} onClick={chipActiveHandler} isActive={isChipActiveHandler(val.id)} />)
      }
    </div>
  );
};

ChoiceChips.propTypes = {
  className: PropTypes.string,
  callback: PropTypes.func
}

export default ChoiceChips;

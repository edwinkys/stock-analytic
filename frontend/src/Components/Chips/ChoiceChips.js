import React, {useState} from 'react';

// Import components
import Chip from './Chip';

const periods = [
  {
    id: "1d"
  },
  {
    id: "1w"
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
    }
  };

  // Is chip active handler
  const isChipActiveHandler = id => (chipActiveId === id);

  return (
    <div {...props}>
      {
        periods.map((val, index) => <Chip key={val.id} id={val.id} label={val.id} onClick={chipActiveHandler} isActive={isChipActiveHandler(val.id)} />)
      }
    </div>
  );
};

export default ChoiceChips;

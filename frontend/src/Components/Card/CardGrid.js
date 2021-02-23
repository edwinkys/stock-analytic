import React from "react";
import PropTypes from "prop-types";

const CardGrid = props => {
  return (
    <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 " + props.addClassName}>
      {props.children}
    </div>
  );
};

CardGrid.propTypes = {
  addClassName: PropTypes.string,
  children: PropTypes.node
}

export default CardGrid;

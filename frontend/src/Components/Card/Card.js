import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <div className="flex flex-col p-6 bg-gray-darker rounded-lg">
      <span className="font-bold mb-6">
        {props.title}
      </span>
      <hr className="border-gray-lighter mb-6 w-1/2" />
      {props.children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default Card;

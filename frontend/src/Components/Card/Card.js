import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  let hideStyle = props.hideCard ? " hidden" : " flex"
  return (
    <div className={"flex-col p-6 bg-gray-darker rounded-lg" + hideStyle}>
      {
        props.subtitle ?
        <span className="text-xs truncate mb-3 text-gray-lighter">
          {props.subtitle}
        </span> :
        null
      }
      <span className="font-bold mb-6 text-light">
        {props.title}
      </span>
      <hr className="border-gray-lighter mb-6 w-1/2" />
      {props.children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  hideCard: PropTypes.bool
}

export default Card;

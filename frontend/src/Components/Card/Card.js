import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="flex flex-col p-6 bg-gray-darker rounded-lg">
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node
}

export default Card;

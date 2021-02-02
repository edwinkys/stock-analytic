import React from 'react';
import PropTypes from 'prop-types';

// Import static
import './StringField.css';

const StringField = props => {
  return (
    <div className={"string-field-group " + props.margin}>
      <label htmlFor={props.id} className="string-field-label">
        {props.label}
      </label>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="string-field-input"
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
        spellCheck="false"
        {...props}
      />
    </div>
  );
};

StringField.propTypes = {
  margin: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

export default StringField;

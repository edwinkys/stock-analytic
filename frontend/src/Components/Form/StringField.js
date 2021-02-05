import React from 'react';
import PropTypes from 'prop-types';

const StringField = props => {
  let textError = "";
  let borderError = "";

  if (props.hasError) {
    textError = " text-error";
    borderError= " border-error";
  }

  return(
    <div className="flex flex-col w-full">
      <label htmlFor={props.id} className={"text-xs text-gray-lighter" + textError}>
        {props.label}
      </label>
      <input
        name={props.id}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={"bg-transparent border-b border-gray-lighter hover:border-secondary focus:border-secondary py-3" + borderError}
        spellCheck={false}
        {...props}
      />
      {
        props.enableErrorMessage && props.hasError ?
        <span className="text-xs text-error mt-3">
          {props.errorMessage}
        </span>
        : null
      }
    </div>
  );
};

StringField.propTypes = {
  hasError: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  enableErrorMessage: PropTypes.bool,
  errorMessage: PropTypes.string
}

export default StringField;

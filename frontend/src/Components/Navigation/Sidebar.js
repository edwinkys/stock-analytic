import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// Import icons
import {IoCloseOutline} from 'react-icons/io5';

// Import components
import StringField from '../Form/StringField';

const Sidebar = props => {
  let activeStyle = props.isActive ? " active" : "";

  // Input Uppercase
  const inputUpperCaseHandler = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  return (
    <Fragment>
      <div className={"overlay" + activeStyle} onClick={props.sidebarToggler}></div>
      <nav className={"sidebar" + activeStyle}>
        <div className="flex flex-row items-center justify-end p-6">
          <button className="btn btn-link" onClick={props.sidebarToggler}>
            <IoCloseOutline className="icon" />
          </button>
        </div>
        <div className="flex p-6">
          <StringField
            id="ticker"
            label="Ticker"
            type="text"
            placeholder="TSLA"
            onKeyUp={inputUpperCaseHandler}
          />
        </div>
      </nav>
    </Fragment>
  );
};

Sidebar.propTypes = {
  isActive: PropTypes.bool,
  sidebarToggler: PropTypes.func.isRequired
};

export default Sidebar;

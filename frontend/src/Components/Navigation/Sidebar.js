import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

// Import icons
import {IoCloseOutline} from 'react-icons/io5';

// Import components
import StringField from '../Form/StringField';

const Sidebar = props => {
  let activeStyle = props.isActive ? " active" : "";
  let path = "";

  const [ticker, setTicker] = useState("");
  const history = useHistory();

  // Input Uppercase
  const inputUpperCaseHandler = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  // Redirect to Ticker
  const changeHandler = e => {
    setTicker(e.target.value.toLowerCase());
  };

  const submitHandler = e => {
    e.preventDefault();
    path = "/stock/" + ticker + "/";
    history.push(path);
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
        <form onSubmit={submitHandler} className="flex p-6">
          <StringField
            id="ticker"
            label="Ticker"
            type="text"
            placeholder="TSLA"
            value={ticker.toUpperCase()}
            onKeyUp={inputUpperCaseHandler}
            onChange={changeHandler}
            autoFocus={props.isActive}
          />
        </form>
      </nav>
    </Fragment>
  );
};

Sidebar.propTypes = {
  isActive: PropTypes.bool,
  sidebarToggler: PropTypes.func.isRequired
};

export default Sidebar;

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import StringField from '../../Form/StringField/StringField';

// Import icon
import {IoCloseOutline} from 'react-icons/io5';

// Import static
import './Sidebar.css';

const Sidebar = props => {
  let activeStyle = props.isActive ? "active" : "";

  return (
    <Fragment>
      <div className={"overlay " + activeStyle} onClick={props.toggleSidebar}></div>
      <div className={"sidebar " + activeStyle}>
        <div className="sidebar-header">
          <button className="btn btn-link" onClick={props.toggleSidebar}>
            <IoCloseOutline className="icon" />
          </button>
        </div>
        <div className="sidebar-search">
          <StringField id="search" type="text" placeholder="Search Ticker" label="Ticker" />
        </div>
      </div>
    </Fragment>
  );
};

Sidebar.propTypes = {
  isActive: PropTypes.bool,
  toggleSidebar: PropTypes.func
}

export default Sidebar;

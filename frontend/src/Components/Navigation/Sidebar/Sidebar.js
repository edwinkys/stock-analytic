import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// Import icon
import {IoCloseOutline} from 'react-icons/io5';

// Import static
import './Sidebar.css';

const Sidebar = props => {
  let activeStyle = props.isActive ? "active" : null;

  return (
    <Fragment>
      <div className={"sidebar " + activeStyle}>
        <div className="sidebar-header">
          <button className="btn btn-link" onClick={props.toggleSidebar}>
            <IoCloseOutline className="icon" />
          </button>
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

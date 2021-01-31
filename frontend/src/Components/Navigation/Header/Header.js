import React from 'react';
import PropTypes from 'prop-types';

// Import icons
import {
  IoMenuOutline,
  IoLogoTwitter
} from 'react-icons/io5';

// Import static
import './Header.css';
import logo from '../../../Assets/logo.png';

const Header = props => {
  return (
    <header className="header">
      <div className="container wrapper header-wrapper">
        <div className="header-first-section">
          <button className="btn header-icon-btn" onClick={props.toggleSidebar}>
            <IoMenuOutline className="icon" />
          </button>
        </div>
        <div className="header-second-section">
          <img
            src={logo}
            className="header-logo"
            alt="Interial Logo"
          />
        </div>
        <div className="header-third-section">
          <a href="https://twitter.com">
            <button className="btn btn-link">
              <IoLogoTwitter className="icon" />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func
};

export default Header;

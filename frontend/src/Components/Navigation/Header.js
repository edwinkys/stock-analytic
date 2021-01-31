import React from 'react';

// Import static
import './Header.css';
import logo from '../../Assets/logo.png';

const Header = props => {
  return (
    <header className="header">
      <div className="container wrapper header-wrapper">
        <div className="header-first-section">
          <button className="btn header-icon-btn" onClick={props.toggleSidebar}>
            Menu
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
          <button className="btn header-icon-btn" onClick={props.toggleSidebar}>
            Instagram
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

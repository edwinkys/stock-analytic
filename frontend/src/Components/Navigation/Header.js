import React from 'react';
import PropTypes from 'prop-types';

// Import assets
import logo from '../../Assets/logo.png';

// Import icons
import {IoLogoTwitter, IoMenuOutline} from 'react-icons/io5';

const Header = props => {
  return (
    <header className="bg-gray-darker sticky top-0">
      <div className="flex container wrapper py-6">
        <div className="flex flex-row flex-1 justify-start items-center">
          <button className="btn btn-link" onClick={props.sidebarToggler}>
            <IoMenuOutline className="icon" />
          </button>
        </div>
        <div className="flex flex-row flex-1 justify-center items-center">
          <img
            src={logo}
            className="h-8"
            alt="Interial Logo"
          />
        </div>
        <div className="flex flex-row flex-1 justify-end items-center">
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
  sidebarToggler: PropTypes.func.isRequired
};

export default Header;

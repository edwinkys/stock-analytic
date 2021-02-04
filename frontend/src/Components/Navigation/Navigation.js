import React, {Fragment, useState} from 'react';

// Import components
import Header from './Header';
import Sidebar from './Sidebar';

const Navigation = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const sidebarToggler = () => (setSidebarActive(!isSidebarActive));

  return (
    <Fragment>
      <Header sidebarToggler={sidebarToggler} />
      <Sidebar sidebarToggler={sidebarToggler} isActive={isSidebarActive} />
    </Fragment>
  );
};

export default Navigation;

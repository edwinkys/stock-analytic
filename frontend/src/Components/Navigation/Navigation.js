import React, {Fragment, useState} from 'react';

// Import components
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Navigation = props => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => setSidebarActive(!isSidebarActive);

  return (
    <Fragment>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isActive={isSidebarActive} toggleSidebar={toggleSidebar} />
    </Fragment>
  );
};

export default Navigation;

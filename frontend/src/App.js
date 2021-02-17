import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// Import router
import RouteConfig from './RouteConfig';

const App = () => {
  return (
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  );
};

export default App;

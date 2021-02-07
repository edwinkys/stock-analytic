import React from 'react';

// Import components
import Navigation from './Components/Navigation/Navigation';
import StockChart from './Components/Chart/StockChart';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="flex">
        <div className="container wrapper">
          <StockChart />
        </div>
      </div>
    </div>
  );
};

export default App;

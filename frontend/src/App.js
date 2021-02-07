import React from 'react';

// Import components
import Navigation from './Components/Navigation/Navigation';
import StockChart from './Components/Chart/StockChart';

const data = [
  {
    label: "Aug 1, 2021",
    val: 2
  },
  {
    label: "Aug 2, 2021",
    val: 5
  },
  {
    label: "Aug 3, 2021",
    val: 3
  },
  {
    label: "Aug 4, 2021",
    val: 10
  },
  {
    label: "Aug 5, 2021",
    val: 11
  },
  {
    label: "Aug 6, 2021",
    val: 13
  },
  {
    label: "Aug 7, 2021",
    val: 9
  },
  {
    label: "Aug 8, 2021",
    val: 5
  },
  {
    label: "Aug 9, 2021",
    val: 7
  },
  {
    label: "Aug 10, 2021",
    val: 15
  },
  {
    label: "Aug 11, 2021",
    val: 13
  },
  {
    label: "Aug 12, 2021",
    val: 12
  },
  {
    label: "Aug 13, 2021",
    val: 16
  },
  {
    label: "Aug 14, 2021",
    val: 18
  },
  {
    label: "Aug 15, 2021",
    val: 21
  },
  {
    label: "Aug 16, 2021",
    val: 22
  },
  {
    label: "Aug 17, 2021",
    val: 22
  },
  {
    label: "Aug 18, 2021",
    val: 24
  },
  {
    label: "Aug 19, 2021",
    val: 26
  },
  {
    label: "Aug 20, 2021",
    val: 19
  },
  {
    label: "Aug 21, 2021",
    val: 17
  },
  {
    label: "Aug 22, 2021",
    val: 22
  },
  {
    label: "Aug 23, 2021",
    val: 21
  },
  {
    label: "Aug 24, 2021",
    val: 23
  },
  {
    label: "Aug 25, 2021",
    val: 19
  },
  {
    label: "Aug 26, 2021",
    val: 14
  },
  {
    label: "Aug 27, 2021",
    val: 13
  },
  {
    label: "Aug 28, 2021",
    val: 11
  },
  {
    label: "Aug 29, 2021",
    val: 17
  },
  {
    label: "Aug 30, 2021",
    val: 21
  },
  {
    label: "Aug 31, 2021",
    val: 22
  }
];

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="flex">
        <div className="flex container wrapper z-0">
          <StockChart data={data} label="label" value="val" />
        </div>
      </div>
    </div>
  );
};

export default App;

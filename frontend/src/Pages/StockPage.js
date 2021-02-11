import React from 'react';

// Import layout
import DefaultLayout from '../Layouts/DefaultLayout';

// Import components
import StockChart from '../Components/Chart/StockChart';
import ChoiceChips from '../Components/Chips/ChoiceChips';
import Card from '../Components/Card/Card';
import Tooltip from '../Components/Tooltip/Tooltip';

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

const StockPage = props => {
  return (
    <DefaultLayout>
      <div className="flex flex-col container wrapper">
        <div className="section-sm flex-col">
          <div className="flex flex-col mb-6">
            <span className="text-xs text-gray-lighter mb-3">Apple, Inc.</span>
            <span className="text-5xl font-bold mb-6">AAPL</span>
            <span className="text-3xl text-secondary">$140.00</span>
          </div>
          <div className="flex flex-col mb-6">
            <StockChart data={data} label="label" value="val" />
            <ChoiceChips className="flex flex-row overflow-x-auto justify-start md:justify-end py-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <span className="font-bold mb-6">Market Summary</span>
              <hr className="border-gray-lighter mb-6 w-1/2" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-row justify-between">
                  <span className="text-gray-lighter">Open</span>
                  <span>148.8</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-lighter">Prev Close</span>
                  <span>136.8</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-lighter">Today High</span>
                  <span>136.99</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-lighter">Today Low</span>
                  <span>134.4</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-lighter">52w High</span>
                  <span>53.15</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-lighter">52w Low</span>
                  <span>145.09</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-lighter">Vol</span>
                  <span>70,527,203</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span data-tip data-for="avgVolInfo" className="text-gray-lighter">Avg Vol</span>
                  <span>83,910,628</span>
                  <Tooltip id="avgVolInfo" message="The average traded volume in the last 10 days." />
                </div>
              </div>
            </Card>
            <Card>
              <span className="font-bold">Hello</span>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default StockPage;

import React from 'react';

// Import layout
import DefaultLayout from '../Layouts/DefaultLayout';

// Import components
import StockChart from '../Components/Chart/StockChart';
import ChoiceChips from '../Components/Chips/ChoiceChips';
import Card from '../Components/Card/Card';
import CardGrid from '../Components/Card/CardGrid';
import CardGridData from '../Components/Card/CardGridData';
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
            <Card title="Market Summary">
              <CardGrid>
                <CardGridData label="Open" data="148.8" />
                <CardGridData label="Prev Close" data="136.8" />
                <CardGridData label="Today High" data="136.99" />
                <CardGridData label="Today Low" data="134.4" />
                <CardGridData label="52w High" data="145.09" />
                <CardGridData label="52w Low" data="53.15" />
                <CardGridData label="Vol" data="70,527,203" />
                <CardGridData label="Avg Vol" data="83,910,628" tooltipId="avgVolInfo" tooltipMessage="The average traded volume in the last 10 days." />
              </CardGrid>
            </Card>
            <Card title="Stock Summary">

            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default StockPage;
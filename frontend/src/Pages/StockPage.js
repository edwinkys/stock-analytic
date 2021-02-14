import React from 'react';

// Import layout
import DefaultLayout from '../Layouts/DefaultLayout';

// Import components
import StockChart from '../Components/Chart/StockChart';
import ChoiceChips from '../Components/Chips/ChoiceChips';
import Card from '../Components/Card/Card';
import CardGrid from '../Components/Card/CardGrid';
import CardGridData from '../Components/Card/CardGridData';

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

// Market Summary Data
const marketSummaryData = [
  {
    label: "Open",
    data: "148.8"
  },
  {
    label: "Prev Close",
    data: "136.8"
  },
  {
    label: "Today High",
    data: "136.99"
  },
  {
    label: "Today Low",
    data: "134.4"
  },
  {
    label: "52w High",
    data: "145.09"
  },
  {
    label: "52w Low",
    data: "53.15"
  },
  {
    label: "Vol",
    data: "70,527,203"
  },
  {
    label: "Avg Vol",
    data: "83,910,628",
    tooltipId: "avgVolInfo",
    tooltipMessage: "The average traded volume in the last 10 days."
  },
];

// Stock Summary Data
const stockSummaryData = [
  {
    label: "Market Cap",
    data: "2.27T"
  },
  {
    label: "Beta",
    data: "1.27",
    tooltipId: "betaInfo",
    tooltipMessage: "Beta is a measure of a stock's volatility in relation to the overall market. The higher the beta the more volatile."
  },
  {
    label: "P/E Ratio",
    data: "36.72",
    tooltipId: "peRatioInfo",
    tooltipMessage: "The P/E Ratio tells you how expensive a stock is compared to its earnings."
  },
  {
    label: "EPS",
    data: "3.69",
    tooltipId: "epsInfo",
    tooltipMessage: "EPS is calculated as a company's profit divided by the outstanding shares of its common stock."
  },
  {
    label: "Dividend",
    data: "0.6%"
  },
  {
    label: "Profit Margin",
    data: "21.7%"
  },
  {
    label: "PEG Ratio",
    data: "2.02",
    tooltipId: "pegRatioInfo",
    tooltipMessage: "The PEG ratio compares a company’s P/E ratio to its expected rate of growth, a key factor for assessing its value."
  },
  {
    label: "EV/R",
    data: "7.9",
    tooltipId: "evrInfo",
    tooltipMessage: "EV/R is a measure of the value of a stock that compares a company's enterprise value to its revenue"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card title="Market Summary">
              <CardGrid>
                {
                  marketSummaryData.map((item, index) => <CardGridData key={index} label={item.label} data={item.data} tooltipId={item.tooltipId} tooltipMessage={item.tooltipMessage} />)
                }
              </CardGrid>
            </Card>
            <Card title="Stock Summary">
              <CardGrid>
                {
                  stockSummaryData.map((item, index) => <CardGridData key={index} label={item.label} data={item.data} tooltipId={item.tooltipId} tooltipMessage={item.tooltipMessage} />)
                }
              </CardGrid>
            </Card>
          </div>
          <div className="flex flex-col">
            <Card title="Company Profile">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <span>Hello</span>
                <span>Hello</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default StockPage;

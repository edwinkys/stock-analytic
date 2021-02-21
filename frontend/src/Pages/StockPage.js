import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Axios from '../Lib/Axios';

// Import layout
import DefaultLayout from '../Layouts/DefaultLayout';

// Import components
import StockChart from '../Components/Chart/StockChart';
import ChoiceChips from '../Components/Chips/ChoiceChips';
import Card from '../Components/Card/Card';
import CardGrid from '../Components/Card/CardGrid';
import CardGridData from '../Components/Card/CardGridData';

// Import util function
import ShortenParagraph from '../Lib/ShortenParagraph';
import BigDecimal from '../Lib/BigDecimal';
import FixedDecimal from '../Lib/FixedDecimal';
import ToPercentage from '../Lib/ToPercentage';
import ShortenLink from '../Lib/ShortenLink';

const StockPage = props => {
  const {ticker} = useParams();
  const [activePeriod, setActivePeriod] = useState("3m");
  const [stockInfo, setStockInfo] = useState({});
  const [stockData, setStockData] = useState({});
  const [isDataLoaded, setDataLoaded] = useState(false);

  // Callback Function
  const callbackActivePeriod = period => {
    setActivePeriod(period);
  };

  // Get stock info
  useEffect(() => {
    setDataLoaded(false);

    Axios.get('/info', {
      params: {
        ticker: ticker
      }
    })
      .then((response) => {
        setStockInfo(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ticker]);

  // Get stock price data
  useEffect(() => {
    Axios.get('/data', {
      params: {
        ticker: ticker,
        period: activePeriod
      }
    })
      .then((response) => {
        setStockData(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ticker, activePeriod]);


  // Market Summary Data
  const marketSummaryData = [
    {
      label: "Open",
      data: FixedDecimal(stockInfo.open)
    },
    {
      label: "Prev Close",
      data: FixedDecimal(stockInfo.previousClose)
    },
    {
      label: "Today High",
      data: FixedDecimal(stockInfo.dayHigh)
    },
    {
      label: "Today Low",
      data: FixedDecimal(stockInfo.dayLow)
    },
    {
      label: "52w High",
      data: FixedDecimal(stockInfo.fiftyTwoWeekHigh)
    },
    {
      label: "52w Low",
      data: FixedDecimal(stockInfo.fiftyTwoWeekLow)
    },
    {
      label: "Vol",
      data: BigDecimal(stockInfo.volume)
    },
    {
      label: "Avg Vol",
      data: BigDecimal(stockInfo.averageDailyVolume10Day),
      tooltipId: "avgVolInfo",
      tooltipMessage: "The average traded volume in the last 10 days."
    },
  ];

  // Stock Summary Data
  const stockSummaryData = [
    {
      label: "Market Cap",
      data: BigDecimal(stockInfo.marketCap)
    },
    {
      label: "Beta",
      data: FixedDecimal(stockInfo.beta),
      tooltipId: "betaInfo",
      tooltipMessage: "Beta is a measure of a stock's volatility in relation to the overall market. The higher the beta the more volatile."
    },
    {
      label: "P/E Ratio",
      data: FixedDecimal(stockInfo.trailingPE),
      tooltipId: "peRatioInfo",
      tooltipMessage: "The P/E Ratio tells you how expensive a stock is compared to its earnings."
    },
    {
      label: "EPS",
      data: FixedDecimal(stockInfo.trailingEps),
      tooltipId: "epsInfo",
      tooltipMessage: "EPS is calculated as a company's profit divided by the outstanding shares of its common stock."
    },
    {
      label: "Dividend",
      data: ToPercentage(stockInfo.dividendYield)
    },
    {
      label: "Profit Margin",
      data: ToPercentage(stockInfo.profitMargins)
    },
    {
      label: "PEG Ratio",
      data: FixedDecimal(stockInfo.pegRatio),
      tooltipId: "pegRatioInfo",
      tooltipMessage: "The PEG ratio compares a company’s P/E ratio to its expected rate of growth, a key factor for assessing its value."
    },
    {
      label: "EV/R",
      data: FixedDecimal(stockInfo.enterpriseToRevenue),
      tooltipId: "evrInfo",
      tooltipMessage: "EV/R is a measure of the value of a stock that compares a company's enterprise value to its revenue"
    }
  ];

  // Company Profile
  const companyProfileData = [
    {
      label: "Sector",
      data: stockInfo.sector
    },
    {
      label: "Employees",
      data: BigDecimal(stockInfo.fullTimeEmployees)
    },
    {
      label: "Website",
      data: <a href={stockInfo.website} target="_blank" rel="noreferrer">{ShortenLink(stockInfo.website)}</a>
    },
    {
      label: "Country",
      data: stockInfo.country
    }
  ];

  return (
    <DefaultLayout isLoaded={isDataLoaded}>
      <div className="flex flex-col container wrapper">
        <div className="section-sm flex-col">
          <div className="flex flex-col mb-6">
            <span className="text-xs text-gray-lighter mb-3">
              {stockInfo.shortName}
            </span>
            <span className="text-5xl font-bold mb-6">
              {stockInfo.symbol}
            </span>
            <span className="text-3xl text-secondary">
              {
                stockData[stockData.length - 1] ?
                FixedDecimal(stockData[stockData.length - 1].Close) :
                "-"
              }
            </span>
          </div>
          <div className="flex flex-col mb-6">
            <StockChart data={stockData} label="Time" value="Close" trend="Close Prediction" average="Close Mean" />
            <ChoiceChips className="flex flex-row overflow-x-auto justify-start md:justify-end py-6" callback={callbackActivePeriod} />
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
              <div className="flex flex-col">
                <div className="text-gray-lighter mb-6">
                  {
                    ShortenParagraph(stockInfo.longBusinessSummary)
                  }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {
                    companyProfileData.map((item, index) => <CardGridData key={index} label={item.label} data={item.data} tooltipId={item.tooltipId} tooltipMessage={item.tooltipMessage} />)
                  }
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default StockPage;

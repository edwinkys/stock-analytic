import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useHistory, Link} from "react-router-dom";
import Axios from "../Lib/Axios";

// Import layout
import DefaultLayout from "../Layouts/DefaultLayout";

// Import components
import StockChart from "../Components/Chart/StockChart";
import Card from "../Components/Card/Card";

// Import util
import FixedDecimal from "../Lib/FixedDecimal";
import ToPercentage from "../Lib/ToPercentage";

const HomePage = () => {
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [spyData, setSpyData] = useState({});
  const [vooData, setVooData] = useState({});
  const [iwnData, setIwnData] = useState({});
  const [qqqData, setQqqData] = useState({});
  const history = useHistory();

  const activePeriod = '1m';
  let increasingSpyStyle, increasingVooStyle, increasingIwnStyle, increasingQqqStyle;

  // Gather Data
  useEffect(() => {
    setDataLoaded(false);

    // Gather Data
    axios.all([
      // SPY Data
      Axios.get("/data", {
        params: {
          ticker: 'spy',
          period: activePeriod
        }
      }),

      // VOO Data
      Axios.get("/data", {
        params: {
          ticker: 'voo',
          period: activePeriod
        }
      }),

      // IWN Data
      Axios.get("/data", {
        params: {
          ticker: 'iwn',
          period: activePeriod
        }
      }),

      // Gather QQQ data
      Axios.get("/data", {
        params: {
          ticker: 'qqq',
          period: activePeriod
        }
      })
    ])
      .then(axios.spread((spy, voo, iwn, qqq) => {
        setSpyData(spy.data);
        setVooData(voo.data);
        setIwnData(iwn.data);
        setQqqData(qqq.data);
        setDataLoaded(true);
      }))
      .catch(error => {
        history.push("/page-not-found");
        console.log(error);
      })
  }, [history]);

  // Check if the ETF is increasing
  increasingSpyStyle = spyData.isIncreasing ? " text-secondary" : " text-error";
  increasingVooStyle = vooData.isIncreasing ? " text-secondary" : " text-error";
  increasingIwnStyle = iwnData.isIncreasing ? " text-secondary" : " text-error";
  increasingQqqStyle = qqqData.isIncreasing ? " text-secondary" : " text-error";

  // ETF Data
  const etfData = [
    {
      subtitle: "SPDR S&P 500",
      title: "SPY",
      data: spyData,
      style: increasingSpyStyle
    },
    {
      subtitle: "Vanguard S&P 500 ETF",
      title: "VOO",
      data: vooData,
      style: increasingVooStyle
    },
    {
      subtitle: "iShares Russell 2000 Value ETF",
      title: "IWN",
      data: iwnData,
      style: increasingIwnStyle
    },
    {
      subtitle: "Invesco QQQ Trust, Series 1",
      title: "QQQ",
      data: qqqData,
      style: increasingQqqStyle
    }
  ];

  return (
    <DefaultLayout isLoaded={isDataLoaded}>
      <div className="section flex-col bg-gradient-to-r from-primary to-secondary mt-0">
        <div className="container wrapper flex flex-col justify-center items-center text-center py-36">
          <span className="text-5xl font-bold mb-6">
            Find Your Next Best Stock
          </span>
          <span>
            Check live stock market data with data analytics in the same graph
          </span>
        </div>
      </div>
      <div className="container wrapper">
        <div className="section-sm flex-col -mt-36">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {
              etfData.map((item, i) => (
                <Link to={"/stock/" + item.title.toLowerCase() + "/"}>
                  <Card key={i} title={item.title} subtitle={item.subtitle}>
                    <span className={"mb-3" + item.style}>
                      {
                        item.data.latestPrice ?
                        FixedDecimal(item.data.latestPrice) :
                        "-"
                      }
                    </span>
                    <span className={"text-xs mb-6" + item.style}>
                      (
                      {
                        item.data.isIncreasing ?
                        "+" :
                        null
                      }
                      {
                        item.data.increment ?
                        FixedDecimal(item.data.increment) :
                        null
                      }
                      &emsp;
                      {
                        item.data.isIncreasing ?
                        "+" :
                        null
                      }
                      {
                        item.data.incrementPercentage ?
                        ToPercentage(item.data.incrementPercentage) :
                        null
                      }
                      )
                    </span>
                    <StockChart data={item.data.price} label="Time" value="Close" trend="Close Prediction" average="Close Mean" isIncreasing={item.data.isIncreasing} height={150} />
                  </Card>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

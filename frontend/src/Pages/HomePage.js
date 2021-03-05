import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
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

    // Gather SPY data
    Axios.get("/data", {
      params: {
        ticker: 'spy',
        period: activePeriod
      }
    })
      .then((response) => {
        setSpyData(response.data);
      })
      .catch((error) => {
        history.push("/page-not-found");
        console.log(error);
      });

    // Gather VOO data
    Axios.get("/data", {
      params: {
        ticker: 'voo',
        period: activePeriod
      }
    })
      .then((response) => {
        setVooData(response.data);
      })
      .catch((error) => {
        history.push("/page-not-found");
        console.log(error);
      });

    // Gather IWN data
    Axios.get("/data", {
      params: {
        ticker: 'iwn',
        period: activePeriod
      }
    })
      .then((response) => {
        setIwnData(response.data);
      })
      .catch((error) => {
        history.push("/page-not-found");
        console.log(error);
      });

    // Gather QQQ data
    Axios.get("/data", {
      params: {
        ticker: 'qqq',
        period: activePeriod
      }
    })
      .then((response) => {
        setQqqData(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        history.push("/page-not-found");
        console.log(error);
      });
  }, [history]);

  // Check if the ETF is increasing
  increasingSpyStyle = spyData.isIncreasing ? " text-secondary" : " text-error";
  increasingVooStyle = vooData.isIncreasing ? " text-secondary" : " text-error";
  increasingIwnStyle = iwnData.isIncreasing ? " text-secondary" : " text-error";
  increasingQqqStyle = qqqData.isIncreasing ? " text-secondary" : " text-error";

  // ETF Data
  const etfData = [
    {
      title: "SPY",
      data: spyData,
      style: increasingSpyStyle
    },
    {
      title: "VOO",
      data: vooData,
      style: increasingVooStyle
    },
    {
      title: "IWN",
      data: iwnData,
      style: increasingIwnStyle
    },
    {
      title: "QQQ",
      data: qqqData,
      style: increasingQqqStyle
    }
  ];

  return (
    <DefaultLayout isLoaded={isDataLoaded}>
      <div className="container wrapper">
        <div className="section-sm flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {
              etfData.map((item, i) => (
                <Card key={i} title={item.title}>
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
              ))
            }
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

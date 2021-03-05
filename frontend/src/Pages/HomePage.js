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
  const history = useHistory();

  const activePeriod = '1m';
  let increasingSpyStyle;

  // Gather SPY Data
  useEffect(() => {
    setDataLoaded(false);
    Axios.get("/data", {
      params: {
        ticker: 'spy',
        period: activePeriod
      }
    })
      .then((response) => {
        setSpyData(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        history.push("/page-not-found");
        console.log(error);
      });
  }, [history]);

  // Check if the SPY is increasing
  if (spyData.isIncreasing) {
    increasingSpyStyle = " text-secondary";
  }
  else {
    increasingSpyStyle = " text-error";
  }

  return (
    <DefaultLayout isLoaded={isDataLoaded}>
      <div className="container wrapper">
        <div className="section-sm flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card title="SPY">
              <span className={"mb-3" + increasingSpyStyle}>
                {
                  spyData.latestPrice ?
                  FixedDecimal(spyData.latestPrice) :
                  "-"
                }
              </span>
              <span className={"text-xs mb-6" + increasingSpyStyle}>
                (
                {
                  spyData.isIncreasing ?
                  "+" :
                  null
                }
                {
                  spyData.increment ?
                  FixedDecimal(spyData.increment) :
                  null
                }
                &emsp;
                {
                  spyData.isIncreasing ?
                  "+" :
                  null
                }
                {
                  spyData.incrementPercentage ?
                  ToPercentage(spyData.incrementPercentage) :
                  null
                }
                )
              </span>
              <StockChart data={spyData.price} label="Time" value="Close" trend="Close Prediction" average="Close Mean" isIncreasing={spyData.isIncreasing} height={150} />
            </Card>
            <Card title="VOO">
            </Card>
            <Card title="QQQ">
            </Card>
            <Card title="IWM">
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

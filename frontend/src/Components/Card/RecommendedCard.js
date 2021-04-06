import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Import components
import Card from "./Card";
import CardGrid from "./CardGrid";
import Tooltip from "../Tooltip/Tooltip";

// Import static
import clusterList from "../../Assets/Clustered Stock Dataset.json";

const RecommendedCard = props => {
  // Recommendation list
  const [recList, setRecList] = useState([]);

  // Function to get ticker by cluster
  const getTickerByCluster = cluster => (Object.keys(clusterList).filter(key => clusterList[key] === cluster));

  // Set Recommended Stock Ticker
  useEffect(() => {
    setRecList([]);

    const cluster = clusterList[props.ticker.toUpperCase()];
    const sameClusterTickerList = getTickerByCluster(cluster);
    const tickerListLen = sameClusterTickerList.length;
    let randNumber = Math.floor(Math.random() * (tickerListLen - 5));

    setRecList(sameClusterTickerList.slice(randNumber, randNumber + 5));
  }, [props.ticker]);

  console.log(recList);

  if (recList.length > 1) {
    return (
      <div className="mt-12">
        <span className="text-xl font-bold mb-6" data-tip data-for="recommendedStock">See Also...</span>
        <Tooltip id="recommendedStock" message="We analyzed over 30 features that define a company and we used our Machine Learning algorithm to determine what stocks perform the same way strongly based on Sector and their performance in the last 1 month." />
        <CardGrid addClassName="grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mt-6">
          {
            recList.map((item, index) => (
              <Link to={"/stock/" + item.toLowerCase() + "/"}>
                <Card key={index}>
                  <span>{item}</span>
                </Card>
              </Link>
            ))
          }
        </CardGrid>
      </div>
    );
  }
  else {
    return null;
  }
};

RecommendedCard.propTypes = {
  ticker: PropTypes.string.isRequired
}

export default RecommendedCard;

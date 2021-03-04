import React from "react";

// Import layout
import DefaultLayout from "../Layouts/DefaultLayout";

// Import components
import StockChart from "../Components/Chart/StockChart";
import Card from "../Components/Card/Card";

const HomePage = () => {
  return (
    <DefaultLayout isLoaded>
      <div className="container wrapper">
        <div className="section-sm flex-col">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-6">
            <Card title="SPY">
            </Card>
            <Card title="VOO">
            </Card>
            <Card title="QQQ">
            </Card>
            <Card title="IWM">
            </Card>
            <Card title="SCHD">
            </Card>
            <Card title="GLD">
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

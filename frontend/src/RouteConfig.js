import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

// Import pages
import HomePage from "./Pages/HomePage";
import StockPage from "./Pages/StockPage";
import NotFoundPage from "./Pages/NotFoundPage";

// Route List
const routeList = [
  {
    path: "/",
    component: <HomePage />,
    isExact: true
  },
  {
    path: "/stock/:ticker/",
    component: <StockPage />
  },
  {
    component: <NotFoundPage />
  }
]

const RouteConfig = () => {
  return (
    <Switch>
      {
        routeList.map((route, index) => 
          <Route key={index} path={route.path} exact={route.isExact}>
            {route.component}
          </Route>
        )
      }
    </Switch>
  );
};

export default RouteConfig;

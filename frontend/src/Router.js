import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

// Import pages
import HomePage from './Pages/Home';

// Routes List
const routes = [
  {
    path: '/',
    component: <HomePage />
  }
];

const Router = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
          <Route exact path={route.path}>
            {route.component}
          </Route>
        ))}
    </Switch>
  );
}

export default Router;

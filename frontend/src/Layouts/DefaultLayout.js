import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

// Import components
import Navigation from '../Components/Navigation/Navigation';
import Loading from '../Components/Loading/Loading';

const DefaultLayout = props => {
  return (
    <div className={props.isLoaded ? "loaded" : ""}>
      <Helmet
        defaultTitle="Interial &ndash; Smart Stock Analytic Platform"
        titleTemplate="%s &ndash; Interial"
      >
        <title>
          {props.title}
        </title>
        <meta name="description" content={props.description} />
      </Helmet>
      <Loading />
      <Navigation />
      {props.children}
    </div>
  );
};

DefaultLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isLoaded: PropTypes.bool,
  children: PropTypes.node
};

export default DefaultLayout;

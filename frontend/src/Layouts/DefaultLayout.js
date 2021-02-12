import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

// Import components
import Navigation from '../Components/Navigation/Navigation';

const DefaultLayout = props => {
  return (
    <Fragment>
      <Helmet
        defaultTitle="Interial &ndash; Smart Stock Analytic Platform"
        titleTemplate="%s &ndash; Interial"
      >
        <title>
          {props.title}
        </title>
        <meta name="description" content={props.description} />
      </Helmet>
      <Navigation />
      {props.children}
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
};

export default DefaultLayout;
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

// Import components
import Navigation from '../Components/Navigation/Navigation';

const DefaultLayout = props => {
  return (
    <Fragment>
      <Helmet>
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

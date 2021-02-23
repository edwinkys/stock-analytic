import React, {Fragment} from "react";

// Import static
import "./Loading.css";

const Loading = () => (
  <Fragment>
    <div id="loader-wrapper">
      <div id="loader">
          <span className="ripple ripple-bg"></span>
          <span className="ripple ripple-bg"></span>
          <span className="ripple ripple-bg"></span>
      </div>

      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  </Fragment>
);

export default Loading;

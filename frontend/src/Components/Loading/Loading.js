import React, {Fragment} from 'react';

// Import static
import './Loading.css';

const Loading = () => (
  <Fragment>
    <div id='loader-wrapper'>
      <div id="loader">
          <span class="ripple ripple-bg"></span>
          <span class="ripple ripple-bg"></span>
          <span class="ripple ripple-bg"></span>
      </div>

      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>
  </Fragment>
);

export default Loading;

import React, { Component } from 'react';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';

class LoadingIndicator extends Component {

  constructor(props) {
    super(props)
  };

  render() {
    return(
      <div className="pe-loadingIndicator">
        <div className="pe-loadingIndcator-overlay"></div>
        <div className="pe-loadingIndicator-chip">
          <div className="pe-loadingIndicator-contents">
            <div className="pe-loadingIndicator-spinner">
              <LoadingSpinner />
            </div>
            <div className="pe-loadingIndicator-text">Loading...</div>
          </div>
        </div>
      </div>
    )
  };
};


export default LoadingIndicator;

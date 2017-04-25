import React            from 'react';
import { LoadingIndicator } from '../../index';


const LoadingIndicatorPage = () => (
      <div className="displaySection">
        <h1>Loading Indicator</h1>

        <div className="elementContainer">

          <div className="code">
            <h2>Props:</h2>
            <ul>
              <li>No Props</li>
            </ul>
          </div>

          <h2>Loading Spinner</h2>
          <br />
          <LoadingIndicator />
          <br />
          <p className="code">{'<LoadingIndicator />'}</p>
        </div>

      </div>
    )


export default LoadingIndicatorPage;

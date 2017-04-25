import React            from 'react';
import { LoadingSpinner } from '../../index';


const LoadingSpinnerPage = () => (
      <div className="displaySection">
        <h1>Loading Spinner</h1>

        <div className="elementContainer">

          <div className="code">
            <h2>Props:</h2>
            <ul>
              <li>No Props</li>
            </ul>
          </div>

          <h2>Loading Spinner</h2>
          <br />
          <LoadingSpinner />
          <br />
          <p className="code">{'<LoadingSpinner />'}</p>
        </div>

      </div>
    )


export default LoadingSpinnerPage;

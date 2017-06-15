import React from 'react';
import { StaticAlert } from '../../index';

const StaticAlertPage = () => (
  <div>
    <div className="displaySection">
      <h1 style={{paddingTop: 65}}>
        <a href="http://pearson-higher-ed.github.io/design/c/alerts/beta/#static-global-alert">
        StaticAlert
        </a>
      </h1>

      <div className="elementContainer">
        <div className="code">
          <h2>Props</h2>
          <h3>Required:</h3>
          <ul>
            <li className="li-props">type:String === {`'Error' || 'Success' || 'Information'`}</li>
            <li className="li-props">title:String === {`'Your title'`}</li>
            <li className="li-props">message:String === {`'Your message'`}</li>
          </ul>
          <h3>Optional:</h3>
          <ul>
            <li className="li-props">inline:Boolean === {`<StaticAlert inline />`}</li>
            <li className="li-props">
              <img className="inline-pic"
                   src="../../icons/alertslabel.jpg"
                   alt="Inline warning" />
            </li>
          </ul>
        </div>
      </div>

      <h3>Example usage</h3>

      <p className="code">
        {`<StaticAlert type="Success"
                       title="My title"
                       message="My success message!" />`}
      </p>

      <StaticAlert type="Success"
                   title="Your title"
                   message={`This alert is displayed on page load and can be dismissed
                     by pressing the close icon.`} />
    </div>
    <StaticAlert inline
                 type="Error"
                 title="Inline title"
                 message={`Disruptive message goes here.`} />
  </div>
);

export default StaticAlertPage;

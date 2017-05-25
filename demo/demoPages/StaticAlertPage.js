import React from 'react';
import { StaticAlert } from '../../index';

const StaticAlertPage = () => (
  <StaticAlert type="Error"
               title="Your title"
               message={`This alert is displayed on page load and can be dismissed
                 by pressing the close icon.`} />
);


export default StaticAlertPage;

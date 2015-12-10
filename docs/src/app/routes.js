import React from 'react';
import { Route } from 'react-router';

import Root from './components/containers/Root';

import Components from './components/containers/Components';
import Buttons from './components/containers/components/Buttons';
import Card from './components/containers/components/Card';
import Labels from './components/containers/components/Labels';
import Dropdowns from './components/containers/components/Dropdowns';

const Routes = (
  <Route path="/" component={Root}>
    <Route path="components" component={Components}>
      <Route path="buttons" component={Buttons} />
      <Route path="card" component={Card} />
      <Route path="labels" component={Labels} />
      <Route path="dropdowns" component={Dropdowns} />
    </Route>
  </Route>
);

export default Routes;

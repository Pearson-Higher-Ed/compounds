import React from 'react';
import { Route } from 'react-router';

import Root from './components/containers/Root';

import Components from './components/containers/Components';
import Buttons from './components/containers/components/Buttons';
import Card from './components/containers/components/Card';
import Labels from './components/containers/components/Labels';
import Dropdowns from './components/containers/components/Dropdowns';

import Calendar from '../../../src/calendar/Calendar';
import DatePicker from '../../../src/calendar/DatePicker';
import DatePickerRange from '../../../src/calendar/DatePickerRange';



const Routes = (
  <Route path="/" component={Root}>
    <Route path="components" component={Components}>
      <Route path="buttons" component={Buttons} />
      <Route path="card" component={Card} />
      <Route path="labels" component={Labels} />
      <Route path="dropdowns" component={Dropdowns} />
      <Route path="calendar" component={Calendar} />
      <Route path="calendar/:locale" component={Calendar} />
      <Route path="datepicker/:locale" component={DatePicker} />
      <Route path="datepicker" component={DatePicker} />
      <Route path="datepickerrange" component={DatePickerRange} />
      <Route path="datepickerrange/:locale" component={DatePickerRange} />
    </Route>
  </Route>
);

export default Routes;

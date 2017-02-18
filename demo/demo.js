import React          from 'react';
import ReactDOM       from 'react-dom';
import { ButtonPage } from './demoPages/ButtonPage';
import { IconPage }   from './demoPages/IconPage';
import { HomePage }   from './demoPages/_HomePage';
import { Header }     from './demoPages/_Header';
import { InputsPage } from './demoPages/InputsPage';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './demo.scss';


const Routes = (
    <Route path="/" component={Header} >
      <IndexRoute component={HomePage} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/icon"   component={IconPage}   />
        <Route path="/inputs" component={InputsPage} />
    </Route>
  );


ReactDOM.render(<Router history={browserHistory} routes={Routes} />, document.getElementById('app'));

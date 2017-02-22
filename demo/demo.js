import React          from 'react';
import ReactDOM       from 'react-dom';
import { ButtonPage } from './demoPages/ButtonPage';
import { IconPage }   from './demoPages/IconPage';
import { HomePage }   from './demoPages/_HomePage';
import { Header }     from './demoPages/_Header';
import { NotFound }   from './demoPages/_NotFound';
import { InputsPage } from './demoPages/InputsPage';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import './demo.scss';


const Routes = (
    <Route path="/compounds" component={Header} >
      <IndexRoute component={HomePage} />
        <Route path="/compounds/button" component={ButtonPage} />
        <Route path="/compounds/icon"   component={IconPage}   />
        <Route path="/compounds/inputs" component={InputsPage} />
        <Route path="*" component={NotFound} />
    </Route>
  );


ReactDOM.render(<Router history={browserHistory} routes={Routes} />, document.getElementById('app'));

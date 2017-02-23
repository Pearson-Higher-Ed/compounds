import React          from 'react';
import ReactDOM       from 'react-dom';
import { ButtonPage } from './demoPages/ButtonPage';
import { IconPage }   from './demoPages/IconPage';
import { HomePage }   from './demoPages/_HomePage';
import { Header }     from './demoPages/_Header';
import { InputsPage } from './demoPages/InputsPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import './demo.scss';


ReactDOM.render(
    <Router>
      <div>
        <Header />
        <Route exact path="/compounds"  component={HomePage}   />
        <Route path="/icons"   component={IconPage}   />
        <Route path="/inputs"  component={InputsPage} />
        <Route path="/buttons" component={ButtonPage} />
      </div>
    </Router>, document.getElementById('app')
);

import ReactDOM       from 'react-dom';
import { ButtonPage } from './demoPages/ButtonPage';
import { IconPage }   from './demoPages/IconPage';
import { HomePage }   from './demoPages/_HomePage';
import  { Header }    from './demoPages/_Header';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './demo.scss';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Header} >
      <IndexRoute component={HomePage} />
      <Route path="/button" component={ButtonPage} />
      <Route path="/icon" component={IconPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);

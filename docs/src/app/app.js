import 'main.scss';
import 'elements.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import Routes from './routes';
import createHistory from 'history/lib/createHashHistory';

// Expose globals for debugging
window.React = React;

ReactDOM.render(
  <Router
    history={createHistory({ queryKey: false })}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {Routes}
  </Router>
, document.getElementById('app'));

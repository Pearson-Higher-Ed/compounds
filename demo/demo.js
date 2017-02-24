import React          from 'react';
import ReactDOMServer      from 'react-dom/server';
import { ButtonPage } from './demoPages/ButtonPage';
import { IconPage }   from './demoPages/IconPage';
import { HomePage }   from './demoPages/_HomePage';
import { Header }     from './demoPages/_Header';
import { InputsPage } from './demoPages/InputsPage';

import {  Route } from 'react-router-dom';
import { StaticRouter } from 'react-router'

import './demo.scss';
const context = {}
const req = {};
req.url = 'localhost:8081'

ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <div>
        <Header />
          <Route exact path="/"  component={HomePage}   />
          <Route path="/icons"   component={IconPage}   />
          <Route path="/inputs"  component={InputsPage} />
          <Route path="/buttons" component={ButtonPage} />
      </div>
    </StaticRouter>, document.getElementById('app')
);

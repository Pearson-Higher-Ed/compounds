import React             from 'react';
import ReactDOM          from 'react-dom';
import ButtonPage        from './demoPages/ButtonPage';
import IconPage          from './demoPages/IconPage';
import HomePage          from './demoPages/HomePage';
import HeaderPage        from './demoPages/HeaderPage';
import PasswordInputPage from './demoPages/PasswordInputPage';
import TextInputPage     from './demoPages/TextInputPage';

import { HashRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
      <div>
        <HeaderPage />
          <Route exact path="/"         component={HomePage}          />
          <Route path="/icons"          component={IconPage}          />
          <Route path="/textinputs"     component={TextInputPage}     />
          <Route path="/passwordinputs" component={PasswordInputPage} />
          <Route path="/buttons"        component={ButtonPage}        />
      </div>
    </Router>, document.getElementById('app')
);

import React            from 'react';
import ReactDOM         from 'react-dom';
import ButtonPage    from './demoPages/ButtonPage';
import IconPage      from './demoPages/IconPage';
import HomePage      from './demoPages/HomePage';
import HeaderPage    from './demoPages/HeaderPage';
import InputsPage    from './demoPages/InputsPage';
import NotFoundPage  from './demoPages/NotFoundPage';

import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';


ReactDOM.render(
    <Router basename="/compounds">
      <div>
        <HeaderPage />
          <Route exact path="/"  component={HomePage}     />
          <Route path="/icons"   component={IconPage}     />
          <Route path="/inputs"  component={InputsPage}   />
          <Route path="/buttons"  component={ButtonPage}   />
          <Route path="*" component={NotFoundPage} />
      </div>
    </Router>, document.getElementById('app')
);

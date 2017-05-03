import React        from 'react';
import ReactDOM     from 'react-dom';
import ButtonPage   from './demoPages/ButtonPage';
import IconPage     from './demoPages/IconPage';
import HomePage     from './demoPages/HomePage';
import HeaderPage   from './demoPages/HeaderPage';
import InputsPage   from './demoPages/InputsPage';
import DropdownPage from './demoPages/DropdownPage';

import { HashRouter as Router, Route } from 'react-router-dom';


const DemoRouter = (props) => (
  <Router>
    <div>
      <HeaderPage />
        <Route path="/" exact  component={HomePage}   />
        <Route path="/icons"   component={IconPage}   />
        <Route path="/inputs"  component={InputsPage} />
        <Route path="/buttons" component={ButtonPage} />
        <Route path="/dropdown" component={DropdownPage} />
    </div>
  </Router>
)

export default DemoRouter;

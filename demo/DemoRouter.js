import React              from 'react';
import ReactDOM           from 'react-dom';
import ButtonPage         from './demoPages/ButtonPage';
import IconPage           from './demoPages/IconPage';
import HomePage           from './demoPages/HomePage';
import HeaderPage         from './demoPages/HeaderPage';
import InputsPage         from './demoPages/InputsPage';
import DropdownPage       from './demoPages/DropdownPage';
import FooterPage         from './demoPages/FooterPage';
import TabsPage           from './demoPages/TabsPage';
import LoadingSpinnerPage from './demoPages/LoadingSpinnerPage';
import ModalPage          from './demoPages/ModalPage';

import { HashRouter as Router, Route } from 'react-router-dom';


const DemoRouter = (props) => (
  <Router>
    <div>
      <HeaderPage />
<<<<<<< HEAD
        <Route path="/" exact  component={HomePage}   />
        <Route path="/icons"   component={IconPage}   />
        <Route path="/inputs"  component={InputsPage} />
        <Route path="/buttons" component={ButtonPage} />
        <Route path="/dropdown" component={DropdownPage} />
        <Route path="/footer" component={FooterPage} />
        <Route path="/tabs" component={TabsPage} />
=======
        <Route path="/" exact         component={HomePage}   />
        <Route path="/icons"          component={IconPage}   />
        <Route path="/modal"          component={ModalPage}   />
        <Route path="/inputs"         component={InputsPage} />
        <Route path="/buttons"        component={ButtonPage} />
        <Route path="/dropdown"       component={DropdownPage} />
>>>>>>> e1ee0294b91e81c29344223164403f55a7ce588d
        <Route path="/loadingSpinner" component={LoadingSpinnerPage} />
    </div>
  </Router>
)

export default DemoRouter;

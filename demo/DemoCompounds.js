import React, { Component } from 'react';
import { DemoButton }       from './demoCompounds/DemoButton';
import { DemoIcon }         from './demoCompounds/DemoIcon';

import './demo.scss';

class DemoCompounds extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <DemoButton />
        <DemoIcon />
      </div>
    )
  };

};



export default DemoCompounds;

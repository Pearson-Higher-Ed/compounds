import React, { Component } from 'react';
import { DemoButton }       from './demoCompounds/DemoButton';

import './demo.scss'


class DemoCompounds extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <DemoButton />
      </div>
    )
  };

};



export default DemoCompounds;

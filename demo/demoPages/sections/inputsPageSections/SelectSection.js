import React from 'react';

import { Select } from '../../../../index';


const SelectSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#select">Select</a></h1>

      <div className="code">
        <h2>Props:</h2>
        <p>Select:</p>
        <ul>
          <li>id:String === "a unique name"</li>
          <li>labelText:String === "a desciptive label"</li>
          <li>options:Object === js Object</li>
        </ul>

      </div>

      <Select
        id        = "select"
        labelText = "Select Label:"
        options   = { {"ipad":"1", "mac":"4", "iphone":"6"} }
        />

      <p className="code">{'<Select id="select" labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } />'}</p>

  </div>
)

export default SelectSection;

import React from 'react';

import { Checkbox } from '../../../../index';


const CheckboxSection = (props) => (
<div>
  <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#checkboxs">Checkbox</a></h1>

    <div className="code">
      <h2>Props:</h2>
      <p>Checkbox:</p>
      <ul>
        <li>id:String === "a unique name"</li>
        <li>labelText:String === "a desciptive label"</li>
        <li>value:String === "a value</li>
      </ul>

    </div>

    <br />
    <br />

    <p>Default:</p>
    <Checkbox
      labelText = "Bacon"
      id        = "checkboxInput"
      value     = "1"
      />
    <p className="code">{'<Checkbox labelText="Bacon" id="checkboxInput" value="1" />'}</p>

    <br />
    <br />

    <p>Checked:</p>
    <Checkbox
      labelText = "Bacon"
      id        = "checkboxInputChecked"
      value     = "1"
      checked   = {true}
      />
    <p className="code">{'<Checkbox labelText="Bacon" id="checkboxInputChecked" value="1" checked />'}</p>

    <br />
    <br />

    <p>Checked and Disabled:</p>
    <Checkbox
      labelText = "Bacon"
      id        = "checkboxInputCheckedDisabled"
      value     = "1"
      checked   = {true}
      disabled  = {true}
      />
    <p className="code">{'<Checkbox labelText="Bacon" id="checkboxInputCheckedDisabled" value="1" checked disabled />'}</p>

</div>
)

export default CheckboxSection;

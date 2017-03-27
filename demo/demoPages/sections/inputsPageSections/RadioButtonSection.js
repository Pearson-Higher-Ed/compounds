import React from 'react';

import { RadioButton } from '../../../../index';


const RadioButtonSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#radio-buttons">RadioButton</a></h1>

      <div className="code">
        <h2>Props:</h2>
        <p>Radio Buttons:</p>
        <ul>
          <li>id:String === "a unique name"</li>
          <li>labelText:String === "a desciptive label"</li>
          <li>name:String === "a name"</li>
        </ul>

      </div>

      <h2>RadioButton:</h2>

      <RadioButton
        id        = "radiobutton1"
        labelText = "radiobutton1"
        name      = "radiobutton1"
        />
      <br />
      <RadioButton
        id        = "radiobutton2"
        labelText = "radiobutton2"
        name      = "radiobutton2"
        />
      <p className="code">{'<RadioButton id="radiobutton1" labelText="radiobutton1" name="radiobutton1" />'}</p>

  </div>
)

export default RadioButtonSection;

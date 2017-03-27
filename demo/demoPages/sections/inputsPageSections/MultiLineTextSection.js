import React from 'react';

import { MultiLineText } from '../../../../index';


const MultiLineTextSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#multiple-line-text">Multiple Line Text</a></h1>

    <div className="code">
      <h2>Props:</h2>
      <p>Multiple Line Text:</p>
      <ul>
        <li>id:String === "a unique name"</li>
        <li>labelText:String === "a desciptive label"</li>
        <li>placeholder:String === "multi-line text</li>
      </ul>

    </div>

    <MultiLineText
      id          = "Multi"
      labelText   = "Multi-line label"
      placeholder = "Many words displayed over multiple lines."
      />

    <p className="code">{'<MultiLineText id="Multi" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." />'}</p>

  </div>
)

export default MultiLineTextSection;

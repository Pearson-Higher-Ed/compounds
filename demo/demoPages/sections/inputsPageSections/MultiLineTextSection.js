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
        <li>infoMessage:String === "an optional info message displayed below the input"</li>
        <li>errorMessage:String === "an optional error message displayed below the input"</li>
      </ul>

    </div>


    <h2>MultiLine</h2>
    <MultiLineText
      id           = "Multi"
      labelText    = "Multi-line label"
      placeholder  = "Many words displayed over multiple lines."
      infoMessage  = {props.intlDefaultText.textInputInfoMessage}
      errorMessage = {props.intlDefaultText.textInputErrorMessage}
      />

    <p className="code">{'<MultiLineText id="Multi" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage />'}</p>

    <br />
    <br />


    <h2>MultiLine - error</h2>
    <MultiLineText
      id           = "Multi"
      inputState   = 'error'
      labelText    = "Multi-line label"
      placeholder  = "Many words displayed over multiple lines."
      infoMessage  = {props.intlDefaultText.textInputInfoMessage}
      errorMessage = {props.intlDefaultText.textInputErrorMessage}
      />

    <p className="code">{'<MultiLineText id="Multi" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage />'}</p>


    <br />
    <br />

    <h2>MultiLine - readOnly</h2>
    <MultiLineText
      id           = "Multi"
      inputState   = 'readOnly'
      labelText    = "Multi-line label"
      placeholder  = "Many words displayed over multiple lines."
      infoMessage  = {props.intlDefaultText.textInputInfoMessage}
      errorMessage = {props.intlDefaultText.textInputErrorMessage}
      readOnly     = {true}
      />

    <p className="code">{'<MultiLineText id="Multi" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage />'}</p>


    <br />
    <br />

    <h2>MultiLine - disabled</h2>
    <MultiLineText
      id           = "Multi"
      inputState   = 'disabled'
      labelText    = "Multi-line label"
      placeholder  = "Many words displayed over multiple lines."
      infoMessage  = {props.intlDefaultText.textInputInfoMessage}
      errorMessage = {props.intlDefaultText.textInputErrorMessage}
      disabled     = {true}
      />

    <p className="code">{'<MultiLineText id="Multi" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage />'}</p>


  </div>
)

export default MultiLineTextSection;

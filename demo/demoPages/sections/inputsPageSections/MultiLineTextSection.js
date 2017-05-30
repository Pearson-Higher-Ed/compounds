import React from 'react';

import { MultiLineText } from '../../../../index';


const MultiLineTextSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/#multiple-line-text">Multiple Line Text</a></h1>

    <div className="code">
      <h2>Props:</h2>
      <p>Multiple Line Text:</p>
      <ul>
        <li>id:String(required) === "a unique name"</li>
        <li>labelText:String(required) === "a desciptive label"</li>
        <li>placeholder:String  === "a placeholder text (not recommended)"</li>
        <li>changeHandler:Function(required) === handles selection</li>
        <li>infoMessage:String === "an optional info message displayed below the input"</li>
        <li>errorMessage:String === "an optional error message displayed below the input"</li>
      </ul>

    </div>


    <h2>MultiLine</h2>
    <MultiLineText
      id           = "Multi"
      labelText    = "Multi-line label"
      placeholder  = "Many words displayed over multiple lines."
      changeHandler  = {() => {}}
      infoMessage  = {props.intlDefaultText.textInputInfoMessage}
      errorMessage = {props.intlDefaultText.textInputErrorMessage}
      />

    <p className="code">{'<MultiLineText id="Multi" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." changeHandler={() => {}} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>

    <br />
    <br />


    <h2>MultiLine - error</h2>
    <MultiLineText
      id           = "Multi"
      inputState   = 'error'
      labelText    = "Multi-line label"
      placeholder  = "Many words displayed over multiple lines."
      changeHandler  = {() => {}}
      infoMessage  = {props.intlDefaultText.textInputInfoMessage}
      errorMessage = {props.intlDefaultText.textInputErrorMessage}
      />

    <p className="code">{'<MultiLineText id="Multi" inputState="error" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." changeHandler={() => {}} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


    <br />
    <br />

    <h2>MultiLine - readOnly</h2>
    <MultiLineText
      id           = "Multi"
      inputState   = 'readOnly'
      labelText    = "Multi-line label"
      placeholder  = "Many words displayed over multiple lines."
      changeHandler  = {() => {}}
      infoMessage  = {props.intlDefaultText.textInputInfoMessage}
      errorMessage = {props.intlDefaultText.textInputErrorMessage}
      readOnly     = {true}
      />

    <p className="code">{'<MultiLineText id="Multi" inputState="readOnly" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." changeHandler={() => {}} infoMessage="This is an info message" errorMessage="This is an error message" readOnly={true} />'}</p>


    <br />
    <br />

    <h2>MultiLine - disabled</h2>
    <MultiLineText
      id           = "Multi"
      inputState   = 'disabled'
      labelText    = "Multi-line label"
      placeholder  = "Many words displayed over multiple lines."
      changeHandler  = {() => {}}
      infoMessage  = {props.intlDefaultText.textInputInfoMessage}
      errorMessage = {props.intlDefaultText.textInputErrorMessage}
      disabled     = {true}
      />

    <p className="code">{'<MultiLineText id="Multi" inputState="disabled" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." changeHandler={() => {}} infoMessage="This is an info message" errorMessage="This is an error message" disabled={true} />'}</p>


  </div>
)

export default MultiLineTextSection;

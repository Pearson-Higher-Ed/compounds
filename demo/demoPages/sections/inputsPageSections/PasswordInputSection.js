import React from 'react';

import { PasswordInput } from '../../../../index';


const PasswordInputSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#specialized-inputs">Password Input</a></h1>

      <div className="code">
        <h2>Props:</h2>
        <p>PasswordInput:</p>
        <ul>
          <li>id:String          === "a unique name"</li>
          <li>labelText:String   === "a desciptive label"</li>
          <li>placeholder:String === "a placeholder text"</li>
          <li>inputType:String   === "default", "error", "disabled", "readOnly"</li>
          <li>showText:String    === "show/hide text"</li>
          <li>hideText:String    === "show/hide text"</li>
          <li>error:Boolean      === true, false</li>
        </ul>
      </div>

      <h2>Default:</h2>
      <PasswordInput
        id          = "e"
        placeholder = {props.intlDefaultText.passwordPlaceholder}
        showText    = {props.intlDefaultText.showText}
        hideText    = {props.intlDefaultText.hideText}
        />
      <p className="code">{'<PasswordInput id="a" placeholder={intlDefaultText.passwordPlaceholder} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />'}</p>


      <br />
      <br />


      <h2>Custom Label:</h2>
      <PasswordInput
        id          = "f"
        labelText   = {props.intlDefaultText.passwordLabel}
        placeholder = {props.intlDefaultText.passwordPlaceholder}
        showText    = {props.intlDefaultText.showText}
        hideText    = {props.intlDefaultText.hideText}
        />
      <p className="code">{'<PasswordInput id="a" labelText={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />'}</p>


      <br />
      <br />


      <h2>Error:</h2>
      <PasswordInput
        id          = "h"
        error       = {true}
        labelText   = {props.intlDefaultText.passwordLabel}
        placeholder = {props.intlDefaultText.passwordPlaceholder}
        showText    = {props.intlDefaultText.showText}
        hideText    = {props.intlDefaultText.hideText}
        />
      <p className="code">{'<PasswordInput id="h" labelText={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} error={true} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} />'}</p>

  </div>
)

export default PasswordInputSection;

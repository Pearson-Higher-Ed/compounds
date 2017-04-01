import React from 'react';

import { TextInput } from '../../../../index';


const PasswordInputSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#specialized-inputs">Password Input</a></h1>

      <div className="code">
        <h2>Props:</h2>
        <p>PasswordInput:</p>
        <ul>
          <li>id:String           === "a unique name"</li>
          <li>password:Boolean    === true/false</li>
          <li>fancy:Boolean       === true/false</li>
          <li>labelText:String    === "a desciptive label"</li>
          <li>placeholder:String  === "a placeholder text"</li>
          <li>inputState:String    === "default", "error", "disabled", "readOnly"</li>
          <li>showText:String     === "show/hide text"</li>
          <li>hideText:String     === "show/hide text"</li>
          <li>infoMessage:String  === "an optional info message displayed below the input"</li>
          <li>errorMessage:String === "an optional error message displayed below the input"</li>
        </ul>
      </div>

      <h2>PasswordInput - Fancy:</h2>
        <TextInput
          password     = {true}
          fancy        = {true}
          id           = "PasswordInputFancy"
          labelText    = {props.intlDefaultText.textLabel}
          placeholder  = {props.intlDefaultText.textPlaceholder}
          infoMessage  = {props.intlDefaultText.textInputInfoMessage}
          errorMessage = {props.intlDefaultText.textInputErrorMessage}
          showText     = {props.intlDefaultText.showText}
          hideText     = {props.intlDefaultText.hideText}
          />
        <p className="code">{'<TextInput password={true} fancy={true} id="fancyPassword" inputState="error" labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} showText={props.intlDefaultText.showText} hideText={props.intlDefaultText.hideText} />'}</p>
      <br />
      <br />


      <h2>PasswordInput - Basic:</h2>
        <TextInput
          password     = {true}
          id           = "PasswordInputBasic"
          labelText    = {props.intlDefaultText.textLabel}
          placeholder  = {props.intlDefaultText.textPlaceholder}
          infoMessage  = {props.intlDefaultText.textInputInfoMessage}
          errorMessage = {props.intlDefaultText.textInputErrorMessage}
          showText     = {props.intlDefaultText.showText}
          hideText     = {props.intlDefaultText.hideText}
          />
        <p className="code">{'<TextInput password={true} id="basicPassword" labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} showText={props.intlDefaultText.showText} hideText={props.intlDefaultText.hideText} />'}</p>
      <br />
      <br />


      <h2>PasswordInput - Basic Error:</h2>
        <TextInput
          password     = {true}
          id           = "PasswordInputBasicError"
          inputState   = "error"
          labelText    = {props.intlDefaultText.textLabel}
          placeholder  = {props.intlDefaultText.textPlaceholder}
          infoMessage  = {props.intlDefaultText.textInputInfoMessage}
          errorMessage = {props.intlDefaultText.textInputErrorMessage}
          showText     = {props.intlDefaultText.showText}
          hideText     = {props.intlDefaultText.hideText}
          />
      <p className="code">{'<TextInput password={true} id="d" inputState="error" labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} showText={props.intlDefaultText.showText} hideText={props.intlDefaultText.hideText}/>'}</p>


      <br />
      <br />


      <h2>PasswordInput - Fancy Error:</h2>
        <TextInput
          password     = {true}
          id           = "PasswordInputFancyError"
          fancy        = {true}
          inputState   = "error"
          labelText    = {props.intlDefaultText.textLabel}
          placeholder  = {props.intlDefaultText.textPlaceholder}
          infoMessage  = {props.intlDefaultText.textInputInfoMessage}
          errorMessage = {props.intlDefaultText.textInputErrorMessage}
          showText     = {props.intlDefaultText.showText}
          hideText     = {props.intlDefaultText.hideText}
          />
      <p className="code">{'<PasswordInput id="password4" fancy={true} labelText={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} error={true} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} showText={props.intlDefaultText.showText} hideText={props.intlDefaultText.hideText} />'}</p>


      <br />
      <br />


      <h2>PasswordInput - Basic Disabled:</h2>
        <TextInput
          password     = {true}
          id           = "PasswordInputBasicDisabled"
          inputState   = "disabled"
          labelText    = {props.intlDefaultText.textLabel}
          placeholder  = {props.intlDefaultText.textPlaceholder}
          infoMessage  = {props.intlDefaultText.textInputInfoMessage}
          errorMessage = {props.intlDefaultText.textInputErrorMessage}
          showText     = {props.intlDefaultText.showText}
          hideText     = {props.intlDefaultText.hideText}
          />
      <p className="code">{'<TextInput password={true} id="d" inputState="error" labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} showText={props.intlDefaultText.showText} hideText={props.intlDefaultText.hideText}/>'}</p>


      <br />
      <br />


      <h2>PasswordInput - Fancy Disabled:</h2>
        <TextInput
          password     = {true}
          id           = "PasswordInputFancyDisabled"
          fancy        = {true}
          inputState   = "disabled"
          labelText    = {props.intlDefaultText.textLabel}
          placeholder  = {props.intlDefaultText.textPlaceholder}
          infoMessage  = {props.intlDefaultText.textInputInfoMessage}
          errorMessage = {props.intlDefaultText.textInputErrorMessage}
          showText     = {props.intlDefaultText.showText}
          hideText     = {props.intlDefaultText.hideText}
          />
      <p className="code">{'<PasswordInput id="password4" fancy={true} labelText={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} error={true} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} showText={props.intlDefaultText.showText} hideText={props.intlDefaultText.hideText} />'}</p>


      <br />
      <br />


      <h2>PasswordInput - Basic readOnly:</h2>
        <TextInput
          password     = {true}
          id           = "PasswordInputBasicReadOnly"
          inputState   = "readOnly"
          labelText    = {props.intlDefaultText.textLabel}
          placeholder  = {props.intlDefaultText.textPlaceholder}
          infoMessage  = {props.intlDefaultText.textInputInfoMessage}
          errorMessage = {props.intlDefaultText.textInputErrorMessage}
          showText     = {props.intlDefaultText.showText}
          hideText     = {props.intlDefaultText.hideText}
          />
      <p className="code">{'<TextInput password={true} id="d" inputState="error" labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} showText={props.intlDefaultText.showText} hideText={props.intlDefaultText.hideText}/>'}</p>


      <br />
      <br />


      <h2>PasswordInput - Fancy readOnly:</h2>
        <TextInput
          password     = {true}
          id           = "PasswordInputFancyReadOnly"
          fancy        = {true}
          inputState   = "readOnly"
          labelText    = {props.intlDefaultText.textLabel}
          placeholder  = {props.intlDefaultText.textPlaceholder}
          infoMessage  = {props.intlDefaultText.textInputInfoMessage}
          errorMessage = {props.intlDefaultText.textInputErrorMessage}
          showText     = {props.intlDefaultText.showText}
          hideText     = {props.intlDefaultText.hideText}
          />
      <p className="code">{'<PasswordInput id="password4" fancy={true} labelText={intlDefaultText.passwordLabel} placeholder={intlDefaultText.passwordPlaceholder} error={true} showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} showText={props.intlDefaultText.showText} hideText={props.intlDefaultText.hideText} />'}</p>

  </div>
)
export default PasswordInputSection;

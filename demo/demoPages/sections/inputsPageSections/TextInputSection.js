import React from 'react';

import { TextInput } from '../../../../index';


const TextInputSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#single-line-text">Single Line Text Input</a></h1>

      <div className="code">
        <h2>Props:</h2>
        <p>TextInput:</p>
        <ul>
          <li>id:String === "a unique name"</li>
          <li>labelText:String === "a desciptive label"</li>
          <li>fancy:Boolean === true/false</li>
          <li>inputState:String === "default", "error", "disabled", "readOnly"</li>
          <li>placeholder:String === "a unique name"</li>
          <li>infoMessage:String === "an optional info message displayed below the input"</li>
          <li>errorMessage:String === "an optional error message displayed below the input"</li>
          <li>**this example is internationialized, strings will work inplace of JSX evaluation...</li>
        </ul>
      </div>


      <h2>Single Line - Basic</h2>
      <TextInput
        id           = "a"
        inputState   = "default"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="a" labelText={intlDefaultText.textLabel} inputState="default" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


      <br />
      <br />

      <h2>Single Line</h2>
      <TextInput
        id           = "a"
        fancy       = {true}
        inputState    = "default"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="a" fancy={true} labelText={intlDefaultText.textLabel} inputState="default" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line -  Basic Error</h2>
      <TextInput
        id           = "b"
        inputState   = "error"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="b" labelText={intlDefaultText.textLabel} inputState="error" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Error</h2>
      <TextInput
        id           = "b"
        fancy        = {true}
        inputState   = "error"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="b" fancy={true} labelText={intlDefaultText.textLabel} inputState="error" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line -  Basic Disabled</h2>
      <TextInput
        id           = "c"
        inputState   = "disabled"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="c" labelText={intlDefaultText.textLabel} inputState="disabled" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Disabled</h2>
      <TextInput
        id           = "c"
        fancy        = {true}
        inputState   = "disabled"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="c" fancy={true} label={intlDefaultText.textLabel} inputState="disabled" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Read Only</h2>
      <TextInput
        id           = "d"
        inputState   = "readOnly"
        fancy        = {true}
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="d" fancy={true} labelText={intlDefaultText.textLabel} inputState="readOnly" placeholder="First Name" infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>



      <br />
      <br />


      <h2>Single Line - Basic Read Only</h2>
      <TextInput
        id           = "d"
        inputState   = "readOnly"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="d" labelText={intlDefaultText.textLabel} inputState="readOnly" placeholder="First Name" infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


</div>
)

export default TextInputSection;

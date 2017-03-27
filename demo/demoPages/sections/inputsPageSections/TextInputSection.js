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
          <li>inputType:String === "default", "error", "disabled", "readOnly"</li>
          <li>placeholder:String === "a unique name"</li>
          <li>infoMessage:String === "an optional info message displayed below the input"</li>
          <li>errorMessage:String === "an optional error message displayed below the input"</li>
          <li>**this example is internationialized, strings will work inplace of JSX evaluation...</li>
        </ul>
      </div>


      <h2>Single Line</h2>
      <TextInput
        id           = "a"
        inputType    = "default"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="a" labelText={intlDefaultText.textLabel} inputType="default" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


      <br />
      <br />

      <h2>Single Line - Basic</h2>
      <TextInput
        id           = "a"
        basic        = {true}
        inputType    = "default"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="a" basic={true} labelText={intlDefaultText.textLabel} inputType="default" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Error</h2>
      <TextInput
        id           = "b"
        inputType    = "error"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="b" labelText={intlDefaultText.textLabel} inputType="error" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Basic Error</h2>
      <TextInput
        id           = "b"
        basic        = {true}
        inputType    = "error"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="b" basic={true} labelText={intlDefaultText.textLabel} inputType="error" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Disabled</h2>
      <TextInput
        id           = "c"
        inputType    = "disabled"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="c" labelText={intlDefaultText.textLabel} inputType="disabled" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Basic Disabled</h2>
      <TextInput
        id           = "c"
        basic        = {true}
        inputType    = "disabled"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="c" label={intlDefaultText.textLabel} inputType="disabled" placeholder={intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Read Only</h2>
      <TextInput
        id           = "d"
        inputType    = "readOnly"
        labelText    = {props.intlDefaultText.textLabel}
        placeholder  = {props.intlDefaultText.textPlaceholder}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="d" labelText={intlDefaultText.textLabel} inputType="readOnly" placeholder="First Name"  infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>

</div>
)

export default TextInputSection;

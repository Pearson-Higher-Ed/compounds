import React from 'react';

import { TextInput } from '../../../../index';


const TextInputSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/#single-line-text">Single Line Text Input</a></h1>

      <div className="code">
        <h2>Props:</h2>
        <p>TextInput:</p>
        <ul>
          <li>id:String === "a unique name"</li>
          <li>labelText:String === "a desciptive label"</li>
          <li>fancy:Boolean === true/false</li>
          <li>inputState:String === "default", "error", "disabled", "readOnly"</li>
          <li>placeholder:String === "a unique name"</li>
          <li>controlFunc:Function === "handles changes"</li>
          <li>infoMessage:String === "an optional info message displayed below the input"</li>
          <li>errorMessage:String === "an optional error message displayed below the input"</li>
        </ul>
      </div>


      <h2>Single Line - Basic</h2>
      <TextInput
        id            = "a"
        inputState    = "default"
        controlFunc   = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="a" inputState="default" controlFunc={() => {}} labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


      <br />
      <br />

      <h2>Single Line</h2>
      <TextInput
        id            = "b"
        fancy         = {true}
        inputState    = "default"
        controlFunc   = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="b" fancy={true} inputState="default" controlFunc={() => {}} labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line -  Basic Error</h2>
      <TextInput
        id            = "c"
        inputState    = "error"
        controlFunc   = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="c" inputState="error" controlFunc={() => {}} labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Error</h2>
      <TextInput
        id            = "d"
        fancy         = {true}
        inputState    = "error"
        controlFunc   = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="d" fancy={true} inputState="error" controlFunc={() => {}} labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line -  Basic Disabled</h2>
      <TextInput
        id            = "e"
        inputState    = "disabled"
        controlFunc   = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="e" inputState="disabled" controlFunc={() => {}} labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Disabled</h2>
      <TextInput
        id            = "f"
        fancy         = {true}
        inputState    = "disabled"
        controlFunc   = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="f" fancy={true} inputState="disabled" controlFunc={() => {}} labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage}  />'}</p>


      <br />
      <br />


      <h2>Single Line - Read Only</h2>
      <TextInput
        id            = "g"
        inputState    = "readOnly"
        fancy         = {true}
        controlFunc   = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="g" inputState="readOnly" fancy={true} controlFunc={() => {}} labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>



      <br />
      <br />


      <h2>Single Line - Basic Read Only</h2>
      <TextInput
        id            = "h"
        inputState    = "readOnly"
        controlFunc   = {() => {}}
        labelText     = {props.intlDefaultText.textLabel}
        placeholder   = {props.intlDefaultText.textPlaceholder}
        infoMessage   = {props.intlDefaultText.textInputInfoMessage}
        errorMessage  = {props.intlDefaultText.textInputErrorMessage}
        />
      <p className="code">{'<TextInput id="h" inputState="readOnly" controlFunc={() => {}} labelText={props.intlDefaultText.textLabel} placeholder={props.intlDefaultText.textPlaceholder} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


  </div>
)


export default TextInputSection;

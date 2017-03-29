import React      from 'react';

import { Select } from '../../../../index';


const SelectSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#select">Select</a></h1>

      <div className="code">
        <h2>Props:</h2>
        <p>Select:</p>
        <ul>
          <li>id:String === "a unique name"</li>
          <li>labelText:String === "a desciptive label"</li>
          <li>fancy:Boolean === true/false</li>
          <li>options:Object === js Object</li>
          <li>infoMessage:String === "an optional info message displayed below the input"</li>
          <li>errorMessage:String === "an optional error message displayed below the input"</li>
        </ul>

      </div>

      <h2>Select - Basic</h2>
      <Select
        id           = "select"
        labelText    = "Select Label:"
        options      = { ["ipad", "mac", "iphone"] }
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />

      <p className="code">{'<Select id="select" labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>

      <br/>
      <br/>

      <h2>Select - Basic Error</h2>
      <Select
        id           = "select"
        labelText    = "Select Label:"
        inputType    = "error"
        options      = { ["ipad", "mac", "iphone"] }
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />

      <p className="code">{'<Select id="select" labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


      <br/>
      <br/>

      <h2>Select - Basic Disabled</h2>
      <Select
        id           = "select"
        labelText    = "Select Label:"
        inputType    = "disabled"
        options      = { ["ipad", "mac", "iphone"] }
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />

      <p className="code">{'<Select id="select" labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


      <br/>
      <br/>


      <h2>Select - Basic ReadOnly</h2>
      <Select
        id           = "select"
        labelText    = "Select Label:"
        inputType    = "readOnly"
        options      = { ["ipad", "mac", "iphone"] }
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />

      <p className="code">{'<Select id="select" labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


      <br/>
      <br/>


      <h2>Select - Fancy</h2>
      <Select
        id           = "select"
        fancy        = {true}
        labelText    = "Select Label:"
        options      = {["ipad", "mac", "iphone"]}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />

      <p className="code">{'<Select id="select" fancy={true} labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>

      <br/>
      <br/>

      <h2>Select - Fancy Error</h2>
      <Select
        id           = "select"
        fancy        = {true}
        inputType    = "error"
        labelText    = "Select Label:"
        options      = {["ipad", "mac", "iphone"]}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />

      <p className="code">{'<Select id="select" fancy={true} labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


      <br/>
      <br/>

      <h2>Select - Fancy Disabled</h2>
      <Select
        id           = "select"
        fancy        = {true}
        inputType    = "disabled"
        labelText    = "Select Label:"
        options      = {["ipad", "mac", "iphone"]}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />

      <p className="code">{'<Select id="select" fancy={true} labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


      <br/>
      <br/>

      <h2>Select - Fancy ReadOnly</h2>
      <Select
        id           = "select"
        fancy        = {true}
        inputType    = "readOnly"
        labelText    = "Select Label:"
        options      = {["ipad", "mac", "iphone"]}
        infoMessage  = {props.intlDefaultText.textInputInfoMessage}
        errorMessage = {props.intlDefaultText.textInputErrorMessage}
        />

      <p className="code">{'<Select id="select" fancy={true} labelText="Select Label:" options={ {"ipad":"1", "mac":"4", "iphone":"6"} } showText={intlDefaultText.showText} hideText={intlDefaultText.hideText} infoMessage={props.intlDefaultText.textInputInfoMessage} errorMessage={props.intlDefaultText.textInputErrorMessage} />'}</p>


  </div>
)

export default SelectSection;

import React      from 'react';

import { Select } from '../../../../index';


const SelectSection = (props) => (
  <div>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/#select">Select</a></h1>

      <div className="code">
        <h2>Props:</h2>
        <p>Select:</p>
        <ul>
          <li>id:String === "a unique name"</li>
          <li>labelText:String === "a desciptive label"</li>
          <li>inputType:String === "error","disabled","readOnly" leave off for default</li>
          <li>fancy:Boolean === true/false</li>
          <li>options:Object === js Object</li>
          <li>controlFunc:Function === handles selection</li>
          <li>infoMessage:String === "an optional info message displayed below the input"</li>
          <li>errorMessage:String === "an optional error message displayed below the input"</li>
        </ul>

      </div>

      <h2>Select - Basic</h2>
      <Select
        id            = "select"
        labelText     = "Select Label:"
        options       = { ["ipad", "mac", "iphone"] }
        controlFunc   = {() => {}}
        infoMessage   = "This is an info message"
        errorMessage  = "This is an error message"
        />

      <p className="code">{'<Select id="select" controlFunc={() => {}} labelText="Select Label:" options={ ["ipad", "mac", "iphone"] } infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>

      <br/>
      <br/>

      <h2>Select - Basic Error</h2>
      <Select
        id            = "select"
        labelText     = "Select Label:"
        inputState    = "error"
        options       = { ["ipad", "mac", "iphone"] }
        controlFunc   = {() => {}}
        infoMessage   = "This is an info message"
        errorMessage  = "This is an error message"
        />

      <p className="code">{'<Select id="select" controlFunc={() => {}} labelText="Select Label:" inputState="error" options={ ["ipad", "mac", "iphone"] } infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


      <br/>
      <br/>

      <h2>Select - Basic Disabled</h2>
      <Select
        id            = "select"
        labelText     = "Select Label:"
        inputState    = "disabled"
        options       = { ["ipad", "mac", "iphone"] }
        controlFunc   = {() => {}}
        infoMessage   = "This is an info message"
        errorMessage  = "This is an error message"
        />

      <p className="code">{'<Select id="select" controlFunc={() => {}} labelText="Select Label:" inputState="disabled" options={ ["ipad", "mac", "iphone"] } infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


      <br/>
      <br/>


      <h2>Select - Basic ReadOnly</h2>
      <Select
        id            = "select"
        labelText     = "Select Label:"
        inputState    = "readOnly"
        options       = { ["ipad", "mac", "iphone"] }
        controlFunc   = {() => {}}
        infoMessage   = "This is an info message"
        errorMessage  = "This is an error message"
        />

      <p className="code">{'<Select id="select" controlFunc={() => {}} labelText="Select Label:" inputState="readOnly" options={ ["ipad", "mac", "iphone"] } infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


      <br/>
      <br/>


      <h2>Select - Fancy</h2>
      <Select
        id            = "select"
        fancy         = {true}
        labelText     = "Select Label:"
        options       = {["ipad", "mac", "iphone"]}
        controlFunc   = {() => {}}
        infoMessage   = "This is an info message"
        errorMessage  = "This is an error message"
        />

      <p className="code">{'<Select id="select" fancy={true} controlFunc={() => {}} labelText="Select Label:" options={["ipad", "mac", "iphone"]} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>

      <br/>
      <br/>

      <h2>Select - Fancy Error</h2>
      <Select
        id            = "select"
        fancy         = {true}
        inputState    = "error"
        labelText     = "Select Label:"
        options       = {["ipad", "mac", "iphone"]}
        controlFunc   = {() => {}}
        infoMessage   = "This is an info message"
        errorMessage  = "This is an error message"
        />

      <p className="code">{'<Select id="select" fancy={true} inputState="error" controlFunc={() => {}} labelText="Select Label:" options={["ipad", "mac", "iphone"]} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


      <br/>
      <br/>

      <h2>Select - Fancy Disabled</h2>
      <Select
        id            = "select"
        fancy         = {true}
        inputState    = "disabled"
        labelText     = "Select Label:"
        options       = {["ipad", "mac", "iphone"]}
        controlFunc   = {() => {}}
        infoMessage   = "This is an info message"
        errorMessage  = "This is an error message"
        />

      <p className="code">{'<Select id="select" fancy={true} inputState="disabled" controlFunc={() => {}} labelText="Select Label:" options={["ipad", "mac", "iphone"]} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


      <br/>
      <br/>

      <h2>Select - Fancy ReadOnly</h2>
      <Select
        id            = "select"
        fancy         = {true}
        inputState    = "readOnly"
        labelText     = "Select Label:"
        options       = {["ipad", "mac", "iphone"]}
        controlFunc   = {() => {}}
        infoMessage   = "This is an info message"
        errorMessage  = "This is an error message"
        />

      <p className="code">{'<Select id="select" fancy={true} inputState="readOnly" controlFunc={() => {}} labelText="Select Label:" options={["ipad", "mac", "iphone"]} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


  </div>
)


export default SelectSection;
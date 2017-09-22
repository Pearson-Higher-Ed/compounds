import React, { Component } from 'react';
import { Select }           from '../../../../index';


export default class SelectSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState:"default"
    };
  }

  render(){

    const { inputState } = this.state;

    return (
    <div>
      <h2><a href="http://pearson-higher-ed.github.io/design/c/inputs/#select">Select</a></h2>

        <div className="code">
          <h3>Props:</h3>
          <p>Select:</p>
          <ul>
            <li>id:String(required) === "a unique name"</li>
            <li>labelText:String(required) === "a desciptive label"</li>
            <li>inputType:String === "error","disabled","readOnly" leave off for default</li>
            <li>fancy:Boolean === true/false</li>
            <li>options:Array(required) === list of options</li>
            <li>selectedOption:String === the option selected</li>
            <li>changeHandler:Function(required) === handles selection</li>
            <li>infoMessage:String === "an optional info message displayed below the input"</li>
            <li>errorMessage:String === "an optional error message displayed below the input"</li>
          </ul>
          <h3>Configure Props:</h3>
          <Select id="select" changeHandler={e => this.setState({inputState:`${e.target.value}`}) } selectedOption={inputState} labelText="Select An inputState:" options={["default", "error", "readOnly", "disabled"]} />
        </div>

        <h3>Select - Basic</h3>
        <Select
          id             = "select"
          labelText      = "Select Label:"
          options        = { ["ipad", "mac", "iphone"] }
          inputState     = {inputState}
          selectedOption = "mac"
          changeHandler  = {() => {}}
          infoMessage    = "This is an info message"
          errorMessage   = "This is an error message"
          />

        <p className="code">{'<Select id="select" changeHandler={() => {}} selectedOption="mac" labelText="Select Label:" options={ ["ipad", "mac", "iphone"] } infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>

        <h3>Select - Fancy</h3>
        <Select
          id             = "select5"
          fancy          = {true}
          inputState     = {inputState}
          labelText      = "Select Label:"
          options        = {["ipad", "mac", "iphone"]}
          selectedOption = "iphone"
          changeHandler  = {() => {}}
          infoMessage    = "This is an info message"
          errorMessage   = "This is an error message"
          />

        <p className="code">{'<Select id="select5" fancy={true} changeHandler={() => {}} selectedOption="iphone" labelText="Select Label:" options={["ipad", "mac", "iphone"]} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


        <h3>Select - Basic ReadOnly</h3>
        <p>Note that the actual state of the select is "disabled" here. Selects do not actually have a readonly state.</p>
        <Select
          id             = "select4"
          labelText      = "Select Label:"
          inputState     = "readOnly"
          options        = { ["ipad", "mac", "iphone"] }
          selectedOption = "mac"
          changeHandler  = {() => {}}
          infoMessage    = "This is an info message"
          errorMessage   = "This is an error message"
          />

        <p className="code">{'<Select id="select4" changeHandler={() => {}} selectedOption="mac" labelText="Select Label:" inputState="readOnly" options={ ["ipad", "mac", "iphone"] } infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


        <h3>Select - Fancy ReadOnly</h3>
        <p>Note that the actual state of the select is "disabled" here. Selects do not actually have a readonly state.</p>
        <Select
          id             = "select8"
          fancy          = {true}
          inputState     = "readOnly"
          labelText      = "Select Label:"
          options        = {["ipad", "mac", "iphone"]}
          selectedOption = "ipad"
          changeHandler  = {() => {}}
          infoMessage    = "This is an info message"
          errorMessage   = "This is an error message"
          />

        <p className="code">{'<Select id="select8" selectedOption="iphone" fancy={true} inputState="readOnly" changeHandler={() => {}} labelText="Select Label:" options={["ipad", "mac", "iphone"]} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>

    </div>
  )
  }
}

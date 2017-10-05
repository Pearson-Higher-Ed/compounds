import React, { Component } from 'react';

import { TextInput, Select } from '../../../../index';


export default class TextInputSection extends Component {

  constructor(props) {
    super(props);

    this.state = { inputState : "default" };

  }

  render(){

    const { inputState } = this.state;

    return(
      <div>
        <h2><a href="http://pearson-higher-ed.github.io/design/c/inputs/#single-line-text">Single Line Text Input</a></h2>

          <div className="code">
            <h3>Props:</h3>
            <p>TextInput:</p>
            <ul>
              <li>id:String(required) === "a unique name"</li>
              <li>labelText:String(required) === "a desciptive label"</li>
              <li>fancy:Boolean === true/false</li>
              <li>inputState:String === "default", "error", "disabled", "readOnly"</li>
              <li>placeholder:String  === "a placeholder text (not recommended)"</li>
              <li>changeHandler:Function(required) === "handles changes"</li>
              <li>infoMessage:String === "an optional info message displayed below the input"</li>
              <li>errorMessage:String === "an optional error message displayed below the input"</li>
            </ul>
            <h3>Configure Props:</h3>
            <Select id="select" changeHandler={e => this.setState({inputState:`${e.target.value}`}) } selectedOption={inputState} labelText="Select An inputState:" options={["default", "error", "readOnly", "disabled"]} />
          </div>


          <h3>Single Line - Basic</h3>
          <TextInput
            id            = "a"
            inputState    = {inputState}
            changeHandler = {() => {}}
            labelText     = {this.props.intlDefaultText.textLabel}
            placeholder   = {this.props.intlDefaultText.textPlaceholder}
            infoMessage   = {this.props.intlDefaultText.textInputInfoMessage}
            errorMessage  = {this.props.intlDefaultText.textInputErrorMessage}
            />
          <p className="code">{'<TextInput id="a" inputState="default" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


          <br />
          <br />

          <h3>Single Line - Fancy</h3>
          <TextInput
            id            = "b"
            fancy         = {true}
            inputState    = {inputState}
            changeHandler = {() => {}}
            labelText     = {this.props.intlDefaultText.textLabel}
            placeholder   = {this.props.intlDefaultText.textPlaceholder}
            infoMessage   = {this.props.intlDefaultText.textInputInfoMessage}
            errorMessage  = {this.props.intlDefaultText.textInputErrorMessage}
            />
          <p className="code">{'<TextInput id="b" fancy={true} inputState="default" changeHandler={() => {}} labelText="First Name" placeholder="First Name" infoMessage="This is an info message" errorMessage="This is an error message"  />'}</p>


      </div>
    )
  }

}

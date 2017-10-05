import React, { Component }  from 'react';
import { TextInput, Select } from '../../../../index';


export default class PasswordInputSection extends Component {
  constructor(props) {
    super(props);
    this.state = { inputState : "default"};
  }

  render(){

    const { inputState } = this.state;

    return (
      <div>
        <h2><a href="http://pearson-higher-ed.github.io/design/c/inputs/#specialized-inputs">Password Input</a></h2>

          <div className="code">
            <h3>Props:</h3>
            <p>PasswordInput:</p>
            <ul>
              <li>id:String(required) === "a unique name"</li>
              <li>password:Boolean    === true/false</li>
              <li>fancy:Boolean       === true/false</li>
              <li>labelText:String(required)    === "a desciptive label"</li>
              <li>placeholder:String  === "a placeholder text (not recommended)"</li>
              <li>inputState:String    === "default", "error", "disabled", "readOnly"</li>
              <li>changeHandler:Function(required) === handles selection</li>
              <li>showText:String     === "'show' button text"</li>
              <li>hideText:String     === "'hide' button text"</li>
              <li>isNotVisibleMsg:String     === "pw hidden state text"</li>
              <li>isVisibleMsg:String     === " pw hidden state text"</li>
              <li>infoMessage:String  === "an optional info message displayed below the input"</li>
              <li>errorMessage:String === "an optional error message displayed below the input"</li>
            </ul>
            <h3>Configure Props:</h3>
            <Select id="select" changeHandler={e => this.setState({inputState:`${e.target.value}`}) } selectedOption={inputState} labelText="Select An inputState:" options={["default", "error", "readOnly", "disabled"]} />
          </div>

          <h3>PasswordInput - Fancy:</h3>
            <TextInput
              password        = {true}
              fancy           = {true}
              id              = "PasswordInputFancy"
              changeHandler   = {() => {}}
              inputState      = {inputState}
              labelText       = {this.props.intlDefaultText.passwordLabel}
              placeholder     = {this.props.intlDefaultText.passwordPlaceholder}
              infoMessage     = {this.props.intlDefaultText.textInputInfoMessage}
              errorMessage    = {this.props.intlDefaultText.textInputErrorMessage}
              showText        = {this.props.intlDefaultText.showText}
              hideText        = {this.props.intlDefaultText.hideText}
              isNotVisibleMsg = {this.props.intlDefaultText.isNotVisibleMsg}
              isVisibleMsg    = {this.props.intlDefaultText.isVisibleMsg}
              />
            <p className="code">{'<TextInput password={true} fancy={true} id="PasswordInputFancy" changeHandler={() => {}} labelText="Password" placeholder="Your password" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />'}</p>


          <br />
          <br />


          <h3>PasswordInput - Basic:</h3>
            <TextInput
              password        = {true}
              id              = "PasswordInputBasic"
              changeHandler   = {() => {}}
              inputState      = {inputState}
              labelText       = {this.props.intlDefaultText.passwordLabel}
              placeholder     = {this.props.intlDefaultText.passwordPlaceholder}
              infoMessage     = {this.props.intlDefaultText.textInputInfoMessage}
              errorMessage    = {this.props.intlDefaultText.textInputErrorMessage}
              showText        = {this.props.intlDefaultText.showText}
              hideText        = {this.props.intlDefaultText.hideText}
              isNotVisibleMsg = {this.props.intlDefaultText.isNotVisibleMsg}
              isVisibleMsg    = {this.props.intlDefaultText.isVisibleMsg}
              />
            <p className="code">{'<TextInput password={true} id="PasswordInputBasic" changeHandler={() => {}} labelText="Password" placeholder="Your password" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />'}</p>


          <h3>PasswordInput - Basic readOnly:</h3>
          <p>It is not recommended to have readonly password inputs.</p>
            <TextInput
              password     = {true}
              id           = "PasswordInputBasicReadOnly"
              inputState   = "readOnly"
              changeHandler  = {() => {}}
              labelText    = {this.props.intlDefaultText.passwordLabel}
              errorMessage = {this.props.intlDefaultText.textInputErrorMessage}
              showText     = {this.props.intlDefaultText.showText}
              hideText     = {this.props.intlDefaultText.hideText}
              isNotVisibleMsg = {this.props.intlDefaultText.isNotVisibleMsg}
              isVisibleMsg    = {this.props.intlDefaultText.isVisibleMsg}
              />
            <p className="code">{'<TextInput password={true} id="PasswordInputBasicReadOnly" inputState="readOnly" changeHandler={() => {}} labelText="Password" value="12345" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible" />'}</p>


          <br />
          <br />


          <h3>PasswordInput - Fancy readOnly:</h3>
            <TextInput
              password        = {true}
              id              = "PasswordInputFancyReadOnly"
              fancy           = {true}
              inputState      = "readOnly"
              changeHandler   = {() => {}}
              labelText       = {this.props.intlDefaultText.passwordLabel}
              errorMessage    = {this.props.intlDefaultText.textInputErrorMessage}
              showText        = {this.props.intlDefaultText.showText}
              hideText        = {this.props.intlDefaultText.hideText}
              isNotVisibleMsg = {this.props.intlDefaultText.isNotVisibleMsg}
              isVisibleMsg    = {this.props.intlDefaultText.isVisibleMsg}
              />
            <p className="code">{'<PasswordInput password={true} id="PasswordInputFancyReadOnly" fancy={true} inputState="readOnly" changeHandler={() => {}} labelText="Password" value="12345" infoMessage="This is an info message" errorMessage="This is an error message" showText="show" hideText="hide" isNotVisibleMsg="Password is hidden" isVisibleMsg="Password is visible"  />'}</p>

      </div>
    )
  }
}

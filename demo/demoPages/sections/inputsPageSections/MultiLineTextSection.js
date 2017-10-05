import React, { Component }      from 'react';
import { MultiLineText, Select } from '../../../../index';


export default class MultiLineTextSection extends Component {

  constructor(props) {
    super(props);
    this.state = { inputState : 'default' };
  }


  render(){

    const { inputState } = this.state;

    return (
      <div>
        <h2><a href="http://pearson-higher-ed.github.io/design/c/inputs/#multiple-line-text">Multiple Line Text</a></h2>

        <div className="code">
          <h3>Props:</h3>
          <p>Multiple Line Text:</p>
          <ul>
            <li>id:String(required) === "a unique name"</li>
            <li>labelText:String(required) === "a desciptive label"</li>
            <li>inputState:String    === "default", "error", "disabled", "readOnly"</li>
            <li>placeholder:String  === "a placeholder text (not recommended)"</li>
            <li>changeHandler:Function(required) === handles selection</li>
            <li>infoMessage:String === "an optional info message displayed below the input"</li>
            <li>errorMessage:String === "an optional error message displayed below the input"</li>
          </ul>
          <h3>Configure Props:</h3>
          <Select id="select" changeHandler={e => this.setState({inputState:`${e.target.value}`}) } selectedOption={inputState} labelText="Select An inputState:" options={["default", "error", "readOnly", "disabled"]} />
        </div>


        <h3>MultiLine</h3>
        <MultiLineText
          id            = "Multi"
          labelText     = "Multi-line label"
          placeholder   = "Many words displayed over multiple lines."
          changeHandler = {() => {}}
          inputState    = {inputState}
          infoMessage   = {this.props.intlDefaultText.textInputInfoMessage}
          errorMessage  = {this.props.intlDefaultText.textInputErrorMessage}
          />

        <p className="code">{'<MultiLineText id="Multi" labelText="Multi-line label" placeholder="Many words displayed over multiple lines." changeHandler={() => {}} infoMessage="This is an info message" errorMessage="This is an error message" />'}</p>


      </div>
    )
  }
}

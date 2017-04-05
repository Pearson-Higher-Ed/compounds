import React, { Component } from 'react';

import { RadioCheckGroup }  from '../../../../index';


class RadioCheckGroupSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      checkboxOptions         : {"tea":"default","coffee":"disabled","soda":"","water":"disabled"},
      checkboxSelectedOptions : ["coffee","water","tea"],
      radioOptions            : {"tea":"default","coffee":"disabled","soda":"","water":"disabled"},
      radioSelectedOptions    : ["coffee"]
    };

    this.radioHandler    = _radioHandler.bind(this);
    this.checkboxHandler = _checkboxHandler.bind(this);
  }


  render() {

    return (
      <div>
        <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/#radio-buttons">RadioCheckGroup</a></h1>

          <div className="code">
            <h2>Props:</h2>
            <p>RadioCheckGroup:</p>
            <ul>
              <li>id:String(required)               === "a unique name"</li>
              <li>legendText:String(required)       === "a desciptive label"</li>
              <li>options:Object(required)          === {'{<option>:<inputState>,<option>:<inputState>, ... }'} where inputState is one of 'default','disabled','default-checked','disabled-checked'. </li>
              <li>name:String(required)             === "a desciptive name"</li>
              <li>SelectedOptions:Array             === "the checked options (radio only supports a single selected option by definition)"</li>
              <li>changeHandler:Function(required)  === "handles populating the selected options from the options"</li>
            </ul>

          </div>

          <h2>RadioButton Group:</h2>

          <RadioCheckGroup
            inputType       = "radio"
            id              = "radiobutton1"
            name            = "radiobutton1"
            legendText      = "These are radio buttons"
            options         = {this.state.radioOptions}
            selectedOptions = {this.state.radioSelectedOptions}
            changeHandler   = {this.radioHandler}
            />
          <br />
          <p className="code">{'<RadioCheckGroup inputType="radio" id="radiobutton1" legendText="radiobutton1" options={{"tea":"default","coffee":"disabled","soda":"","water":"disabled"}} selectedOptions={["tea"]} changeHandler={() => {}} />'}</p>

          <h2>Checkbox Group:</h2>

          <RadioCheckGroup
            inputType       = "checkbox"
            id              = "checkbox1"
            name            = "checkbox1"
            legendText      = "These are checkboxes"
            options         = {this.state.checkboxOptions}
            selectedOptions = {this.state.checkboxSelectedOptions}
            changeHandler   = {this.checkboxHandler}
            />
          <br />
          <p className="code">{'<RadioCheckGroup inputType="checkbox" id="checkbox1" legendText="checkbox1" options={{"tea":"default","coffee":"disabled","soda":"","water":"disabled"}} selectedOptions={["coffee","water","tea"]} changeHandler={() => {}} />'}</p>

      </div>
    )
  }
}


export default RadioCheckGroupSection;



function _checkboxHandler (e) {
    const newSelection = e.target.value;

    let newSelectionArray;

    if(this.state.checkboxSelectedOptions.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.checkboxSelectedOptions.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.checkboxSelectedOptions, newSelection];
    }

    this.setState({ checkboxSelectedOptions: newSelectionArray });
  }


function _radioHandler (e) {
    const newSelection = e.target.value;

    let newSelectionArray;

    if(this.state.radioSelectedOptions.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.radioSelectedOptions.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [newSelection];
    }

    this.setState({ radioSelectedOptions: newSelectionArray });
  }

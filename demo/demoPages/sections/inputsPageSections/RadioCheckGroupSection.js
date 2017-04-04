import React                from 'react';

import { RadioCheckGroup }  from '../../../../index';


const RadioCheckGroupSection = (props) => {
  return (
    <div>
      <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/#radio-buttons">RadioCheckGroup</a></h1>

        <div className="code">
          <h2>Props:</h2>
          <p>RadioCheckGroup:</p>
          <ul>
            <li>id:String             === "a unique name"</li>
            <li>legendText:String     === "a desciptive label"</li>
            <li>options:Object        === {'{<option>:<inputState>,<option>:<inputState>, ... }'} where inputState is one of 'default','disabled','readonly','default-checked','disabled-checked','readonly-checked'. </li>
            <li>name:String           === "a desciptive name"</li>
            <li>SelectedOptions:Array === "the checked options (radio only supports a single selected option by definition)"</li>
            <li>changeHandler:Function  === "handles populating the selected options from the options"</li>
          </ul>

        </div>

        <h2>RadioButton Group:</h2>

        <RadioCheckGroup
          inputType       = "radio"
          id              = "radiobutton1"
          name            = "radiobutton1"
          legendText      = "These are radio buttons"
          options         = {{"tea":"default","coffee":"disabled","soda":"readonly","water":"disabled-checked"}}
          selectedOptions = {["coffee"]}
          changeHandler   = {() => {}}
          />
        <br />
        <p className="code">{'<RadioCheckGroup inputType="radio" id="radiobutton1" legendText="radiobutton1" options={{"tea":"default","coffee":"disabled","soda":"readonly","water":"disabled-checked"}} selectedOptions={["tea"]} changeHandler={() => {}} />'}</p>

        <h2>Checkbox Group:</h2>

        <RadioCheckGroup
          inputType       = "checkbox"
          id              = "checkbox1"
          name            = "checkbox1"
          legendText      = "These are checkboxes"
          options         = {{"tea":"default","coffee":"disabled","soda":"readonly","water":"disabled-checked"}}
          selectedOptions = {["coffee","water","tea"]}
          changeHandler   = {() => {}}
          />
        <br />
        <p className="code">{'<RadioCheckGroup inputType="checkbox" id="checkbox1" legendText="checkbox1" options={{"tea":"default","coffee":"disabled","soda":"readonly","water":"disabled-checked"}} selectedOptions={["tea"]} changeHandler={() => {}} />'}</p>

    </div>
  )
}


export default RadioCheckGroupSection;

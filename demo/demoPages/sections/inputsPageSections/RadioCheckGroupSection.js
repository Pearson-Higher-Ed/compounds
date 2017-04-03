import React                from 'react';

import { RadioCheckGroup } from '../../../../index';


const RadioCheckGroupSection = (props) => {
  return (
    <div>
      <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/#radio-buttons">RadioCheckGroup</a></h1>

        <div className="code">
          <h2>Props:</h2>
          <p>RadioCheckGroup:</p>
          <ul>
            <li>id:String === "a unique name"</li>
            <li>legendText:String === "a desciptive label"</li>
            <li>options:Array === {'[<option>, <option>, ...]'} </li>
            <li>name:String === "a desciptive name"</li>
            <li>SelectedOptions:Array === "the checked options"</li>
            <li>controlFunc:Function === "handles populating the selected options from the options"</li>
          </ul>

        </div>

        <h2>RadioButton Group:</h2>

        <RadioCheckGroup
          inputType       = "radio"
          id              = "radiobutton1"
          name            = "radiobutton1"
          legendText      = "These are radio buttons"
          options         = {["tea","coffee","soda","water"]}
          selectedOptions = {["tea"]}
          controlFunc     = {() => {}}
          />
        <br />
        <p className="code">{'<RadioCheckGroup inputType="radio" id="radiobutton1" legendText="radiobutton1" options={["tea",coffee","soda","water"]} selectedOptions={["tea"]} controlFunc={() => {}} />'}</p>

        <h2>Checkbox Group:</h2>

        <RadioCheckGroup
          inputType       = "checkbox"
          id              = "checkbox1"
          name            = "checkbox1"
          legendText      = "These are checkboxes"
          options         = {["tea","coffee","soda","water"]}
          selectedOptions = {["coffee","soda"]}
          controlFunc     = {() => {}}
          />
        <br />
        <p className="code">{'<RadioCheckGroup inputType="checkbox" id="checkbox1" legendText="checkbox1" options={["tea",coffee","soda","water"]} selectedOptions={["tea"]} controlFunc={() => {}} />'}</p>

    </div>
  )
}


export default RadioCheckGroupSection;

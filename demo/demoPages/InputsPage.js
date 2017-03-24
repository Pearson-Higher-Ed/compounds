import React                        from 'react';
import { TextInput, PasswordInput } from '../../index';


const InputsPage = () => (
      <div className="displaySection">
        <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#single-line-text">Single Line Text Input</a></h1>

        <div className="elementContainer">


          <h2>Single Line</h2>
          <TextInput
            id="a"
            label="First Name"
            inputType="default"
            placeholder="First Name"
          />
          <p className="code">{'<TextInput id="a" label="First Name" inputType="default" placeholder="First Name" />'}</p>


          <br />
          <br />


          <h2>Single Line - Error</h2>
          <TextInput
            id="b"
            label="First Name"
            inputType="error"
            placeholder="First Name"
          />
          <p className="code">{'<TextInput id="b" label="First Name" inputType="error" placeholder="First Name" />'}</p>


          <br />
          <br />


          <h2>Single Line - Disabled</h2>
          <TextInput
            id="c"
            label="First Name"
            inputType="disabled"
            placeholder="First Name"
          />
          <p className="code">{'<PasswordInput id="a" label="Password" />'}</p>


          <br />
          <br />


          <h2>Single Line - Read Only</h2>
          <TextInput
            id="d"
            label="First Name"
            inputType="readOnly"
            placeholder="First Name"
          />
          <p className="code">{'<PasswordInput id="a" label="Password" />'}</p>


          <br />
          <br />

            <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#specialized-inputs">Password Input</a></h1>

              <h2>Default:</h2>
              <PasswordInput id="e" placeholder="Enter Password" showText="show" hideText="hide" />
              <p className="code">{'<PasswordInput id="a" placeholder="Enter Password" showText="show" hideText="hide" />'}</p>


              <br />
              <br />


              <h2>Custom Label:</h2>
              <PasswordInput id="f" label="Password" placeholder="Enter Password" showText="show" hideText="hide" />
              <p className="code">{'<PasswordInput id="a" label="Password" placeholder="Enter Password" showText="show" hideText="hide" />'}</p>


              <br />
              <br />


              <h2>Error:</h2>
              <PasswordInput id="h" label="Password" placeholder="Enter Password" error={true} showText="show" hideText="hide" />
              <p className="code">{'<PasswordInput id="h" label="Password" placeholder="Enter Password" error={true} showText="show" hideText="hide" />'}</p>


              <br />
              <br />


        </div>
      </div>
    )


export default InputsPage;

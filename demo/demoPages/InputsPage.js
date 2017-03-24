import React         from 'react';
import { TextInput } from '../../index';


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


        </div>
      </div>
    )


export default InputsPage;

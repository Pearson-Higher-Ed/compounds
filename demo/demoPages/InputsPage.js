import React, { Component } from 'react';

import {
  PasswordInput,
  // Checkbox,
  TextInput
} from '../../Compounds';



class InputsPage extends Component {

  constructor (props) {
    super(props);
    this.state ={};
  }



  render() {
    return (
      <div className="displaySection">
        <h2><a href="https://pearson-higher-ed.github.io/design/c/inputs/beta">Inputs</a></h2>

        <div className="elementContainer">


          <h5>Single Line</h5>
          <TextInput
            id="a"
            label="First Name"
            type="default"
            placeholder="First Name"
          />
          <p className="code">{'<TextInput id="a" label="First Name" type="default" placeholder="First Name" />'}</p>
          <br />
          <br />


          <h5>Single Line - Error</h5>
          <TextInput
            id="b"
            label="First Name"
            type="error"
            placeholder="First Name"
          />
          <p className="code">{'<TextInput id="b" label="First Name" type="error" placeholder="First Name" />'}</p>
          <br />
          <br />


          <h5>Single Line - Disabled</h5>
          <TextInput
            id="c"
            label="First Name"
            type="disabled"
            placeholder="First Name"
          />
          <p className="code">{'<PasswordInput id="a" label="Password" />'}</p>
          <br />
          <br />


          <h5>Single Line - Read Only</h5>
          <TextInput
            id="d"
            label="First Name"
            type="readOnly"
            placeholder="First Name"
          />
          <p className="code">{'<PasswordInput id="a" label="Password" />'}</p>
          <br />
          <br />

          <h4>PasswordInput:</h4>
          <br />

          <h5>Default:</h5>
          <PasswordInput id="e" placeholder="Enter Password" />
          <p className="code">{'<PasswordInput id="a" placeholder="Enter Password" />'}</p>
          <br />
          <br />


          <h5>Custom Label:</h5>
          <PasswordInput id="f" label="Password" placeholder="Enter Password" />
          <p className="code">{'<PasswordInput id="a" label="Password" placeholder="Enter Password" />'}</p>
          <br />
          <br />


          <h5>Error:</h5>
          <PasswordInput id="h" label="Password" placeholder="Enter Password" error={true} />
          <p className="code">{'<PasswordInput id="h" label="Password" placeholder="Enter Password" error={true} />'}</p>
          <br />
          <br />


          {/* <h5>Checkbox:</h5>
          <Checkbox label="Bacon" size="18" value="1" />
          <p className="code">{'<Checkbox label="Bacon" size="18" value="1" />'}</p>
          <br />
          <br /> */}


        </div>
      </div>
    )
  }
}

export default InputsPage;

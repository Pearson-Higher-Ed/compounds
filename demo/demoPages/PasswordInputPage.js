import React, { Component } from 'react';
import { PasswordInput }    from '../../index';


class PasswordInputPage extends Component {

  render() {
    return (
      <div className="displaySection">
        <h1><a href="https://pearson-higher-ed.github.io/design/c/inputs/beta">Inputs</a></h1>

        <div className="elementContainer">

          <h4>PasswordInput:</h4>
          <br />

          <h2>Default:</h2>
          <PasswordInput id="e" placeholder="Enter Password" showText="show" hideText="hide" />
          <p className="code">{'<PasswordInput id="a" placeholder="Enter Password" />'}</p>
          <br />
          <br />


          <h2>Custom Label:</h2>
          <PasswordInput id="f" label="Password" placeholder="Enter Password" showText="show" hideText="hide" />
          <p className="code">{'<PasswordInput id="a" label="Password" placeholder="Enter Password" />'}</p>
          <br />
          <br />


          <h2>Error:</h2>
          <PasswordInput id="h" label="Password" placeholder="Enter Password" error={true} showText="show" hideText="hide" />
          <p className="code">{'<PasswordInput id="h" label="Password" placeholder="Enter Password" error={true} />'}</p>
          <br />
          <br />


        </div>
      </div>
    )
  }
}

export default PasswordInputPage;

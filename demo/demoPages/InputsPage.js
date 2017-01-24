import React             from 'react';
import { PasswordInput } from '../../Compounds';


export const InputsPage = (props) => (
    <div className="displaySection">
      <h2><a href="https://pearson-higher-ed.github.io/design/c/inputs/beta">Inputs</a></h2>

      <div className="elementContainer">

        <h5>Default:</h5>
        <PasswordInput id="a" />
        <p className="code">{'<PasswordInput id="a" />'}</p>
        <br />
        <h5>Custom Label:</h5>
        <PasswordInput id="a" label="Password" />
        <p className="code">{'<PasswordInput id="a" label="Password" />'}</p>
        <br />
        <h5>Custom Label:</h5>
        <PasswordInput id="a" placeholder="Enter Password" />
        <p className="code">{'<PasswordInput id="a" placeholder="Enter Password" />'}</p>
        <br />
      </div>
    </div>
  )

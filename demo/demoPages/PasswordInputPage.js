import React             from 'react';
import { PasswordInput } from '../../index';


const PasswordInputPage = (props) => (
      <div className="displaySection">
        <h1><a href="http://pearson-higher-ed.github.io/design/c/inputs/beta/#specialized-inputs">Password Input</a></h1>

        <div className="elementContainer">

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


export default PasswordInputPage;

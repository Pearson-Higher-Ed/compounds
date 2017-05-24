import React            from 'react';
import { injectIntl }   from 'react-intl';
import { Button, Icon } from '../../index';


const ButtonPage = () => (
      <div className="displaySection">
        <h1><a href="https://pearson-higher-ed.github.io/design/c/buttons/">Buttons</a></h1>

        <div className="elementContainer">

          <div className="code">
            <h2>Props:</h2>
            <ul>
              <li>btnType:String === "primary", "cta", "default"</li>
              <li>btnSize:String === "small", "large", "xlarge"</li>
              <li>btnIcon:Bool === true/false</li>
              <li>disabled</li>
            </ul>
          </div>

          <h2>Icon Button:</h2>
          <Button btnIcon><Icon name="item-remove-24">close dialog</Icon></Button>
          <p className="code">{'<Button btnIcon><Icon name="item-remove-24">close dialog</Icon></Button>'}</p>

          <br />

          <h2>Default Button:</h2>
          <Button>Default</Button>
          <p className="code">{'<Button>Default</Button>'}</p>

          <br />

          <h2>Primary Button:</h2>
          <Button btnType="primary">Primary</Button>
          <p className="code">{'<Button btnType="primary">Primary</Button>'}</p>

          <br />

          <h2>Call to Action Button:</h2>
          <Button btnType="cta">Call to Action</Button>
          <p className="code">{'<Button btnType="cta">Call to Action</Button>'}</p>


          <br />

          <h2>Disabled Button:</h2>
          <Button disabled>Disabled</Button>
          <p className="code">{'<Button disabled>Disabled</Button>'}</p>

          <br />

          <h2>Primary Disabled Button:</h2>
          <Button btnType="primary" disabled>Primary Disabled</Button>
          <p className="code">{'<Button btnType="primary" disabled>Disabled</Button>'}</p>

          <br />

          <h2>Small Button:</h2>
          <Button btnSize="small">Small</Button>
          <p className="code">{'<Button btnSize="small">Small</Button>'}</p>

          <br />

          <h2>Large Button:</h2>
          <Button btnSize="large">Large</Button>
          <p className="code">{'<Button btnSize="large">Large</Button>'}</p>

          <br />

          <h2>XLarge Button:</h2>
          <Button btnSize="xlarge">XLarge</Button>
          <p className="code">{'<Button btnSize="xlarge">XLarge</Button>'}</p>

          <br />

          <h2>Primary XLarge Button:</h2>
          <Button btnType="primary" btnSize="xlarge">Primary XLarge</Button>
          <p className="code">{'<Button btnType="primary" btnSize="xlarge">XLarge</Button>'}</p>
        </div>

      </div>
    )


export default ButtonPage;

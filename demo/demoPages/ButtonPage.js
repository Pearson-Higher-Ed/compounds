import React, { Component } from 'react';
import { Button }           from '../../index';
import { Icon }             from '../../index';


class ButtonPage extends Component {

    constructor (props) {
      super(props)
      this.state = {};
    }

    render() {
      return (
      <div className="displaySection">
        <h1><a href="https://pearson-higher-ed.github.io/design/c/buttons/">Button</a></h1>

        <div className="elementContainer">
          <h2>Icon Button:</h2>
          <Button className="close-dialog"><Icon name="item-remove-24">close dialog</Icon></Button>
          <p className="code">{'<Button className="close-dialog"><Icon name="item-remove-24">close dialog</Icon></Button>'}</p>
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
  }
}

export default ButtonPage;

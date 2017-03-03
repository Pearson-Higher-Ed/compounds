import React, { Component } from 'react';
import { Button }           from '../../Compounds';
import { Icon }             from '../../Compounds';


class ButtonPage extends Component {

    constructor (props) {
      super(props)
      this.state = {};
    }

    render() {
      return (
      <div className="displaySection">
        <h2><a href="https://pearson-higher-ed.github.io/design/c/buttons/">Button</a></h2>

        <div className="elementContainer">
          <h5>Icon Button:</h5>
          <Button className="close-dialog"><Icon name="item-remove-24">close dialog</Icon></Button>
          <p className="code">{'<Button className="close-dialog"><Icon name="item-remove-24">close dialog</Icon></Button>'}</p>
          <br />
          <h5>Default Button:</h5>
          <Button>Default</Button>
          <p className="code">{'<Button>Default</Button>'}</p>
          <br />
          <h5>Primary Button:</h5>
          <Button btnType="primary">Primary</Button>
          <p className="code">{'<Button btnType="primary">Primary</Button>'}</p>
          <br />
          <h5>Call to Action Button:</h5>
          <Button btnType="cta">Call to Action</Button>
          <p className="code">{'<Button btnType="cta">Call to Action</Button>'}</p>
          <br />
          <h5>Disabled Button:</h5>
          <Button disabled>Disabled</Button>
          <p className="code">{'<Button disabled>Disabled</Button>'}</p>
          <br />
          <h5>Primary Disabled Button:</h5>
          <Button btnType="primary" disabled>Primary Disabled</Button>
          <p className="code">{'<Button btnType="primary" disabled>Disabled</Button>'}</p>
          <br />
          <h5>Small Button:</h5>
          <Button btnSize="small">Small</Button>
          <p className="code">{'<Button btnSize="small">Small</Button>'}</p>
          <br />
          <h5>Large Button:</h5>
          <Button btnSize="large">Large</Button>
          <p className="code">{'<Button btnSize="large">Large</Button>'}</p>
          <br />
          <h5>XLarge Button:</h5>
          <Button btnSize="xlarge">XLarge</Button>
          <p className="code">{'<Button btnSize="xlarge">XLarge</Button>'}</p>
          <br />
          <h5>Primary XLarge Button:</h5>
          <Button btnType="primary" btnSize="xlarge">Primary XLarge</Button>
          <p className="code">{'<Button btnType="primary" btnSize="xlarge">XLarge</Button>'}</p>
        </div>
      </div>
    )
  }
}

export default ButtonPage;

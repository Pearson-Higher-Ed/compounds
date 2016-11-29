import React      from 'react';
import { Button } from '../../Compounds';
import { Icon } from '../../Compounds';


export const DemoButton = (props) => {
  return(
    <div className="displaySection">
      <h2><a href="https://pearson-higher-ed.github.io/design/c/buttons/">Button</a></h2>

      <div className="elementDescription">
        <iframe src="http://pearson-higher-ed.github.io/design/c/buttons/beta/" title="Buttons v2 Design page"  style={{width:'100%', height:'100%'}}/>
      </div>

      <div className="elementContainer">
        <Button className="close-dialog"><Icon name="item-remove-24">close dialog</Icon></Button>
        <Button>Default</Button>
        <p className="code">{'<Button>Default</Button>'}</p>
        <Button btnType="primary">Primary</Button>
        <p className="code">{'<Button btnType="primary">Primary</Button>'}</p>
        <Button btnType="cta">Call to Action</Button>
        <p className="code">{'<Button btnType="cta">Call to Action</Button>'}</p>
        <Button disabled>Disabled</Button>
        <p className="code">{'<Button disabled>Disabled</Button>'}</p>
        <Button btnType="primary" disabled>Disabled</Button>
        <p className="code">{'<Button btnType="primary" disabled>Disabled</Button>'}</p>
        <Button btnSize="small">Small</Button>
        <p className="code">{'<Button btnSize="small">Small</Button>'}</p>
        <Button btnSize="large">Large</Button>
        <p className="code">{'<Button btnSize="large">Large</Button>'}</p>
        <Button btnSize="xlarge">XLarge</Button>
        <p className="code">{'<Button btnSize="xlarge">XLarge</Button>'}</p>
        <Button btnType="primary" btnSize="xlarge">XLarge</Button>
        <p className="code">{'<Button btnType="primary" btnSize="xlarge">XLarge</Button>'}</p>
      </div>
    </div>
  )
};
